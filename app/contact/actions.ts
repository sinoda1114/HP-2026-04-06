"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";
import { escapeHtml } from "@/lib/escape-html";
import {
  resolveContactFromEmail,
  userMessageFromResendError,
} from "@/lib/resend-contact";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(1, "名前を入力してください").max(100),
  email: z.string().email("有効なメールアドレスを入力してください"),
  subject: z.string().min(1, "件名を入力してください").max(200),
  message: z
    .string()
    .min(10, "お問い合わせ内容は10文字以上で入力してください")
    .max(10000),
});

export type ContactState = {
  ok?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const hp = formData.get("_wf_hp");
  if (typeof hp === "string" && hp.trim() !== "") {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const clientIp =
    forwarded?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";
  if (!checkContactRateLimit(clientIp)) {
    return {
      error:
        "送信回数が多すぎます。しばらく時間をおいてから再度お試しください。",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error:
        "メール送信の設定が完了していません（RESEND_API_KEY）。管理者にお問い合わせください。",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contactEmail;
  const fromResolved = resolveContactFromEmail();
  if ("error" in fromResolved) {
    return { error: fromResolved.error };
  }
  const { from } = fromResolved;

  const bccRaw = process.env.CONTACT_BCC_EMAIL?.trim();
  const bcc = bccRaw
    ? bccRaw.split(",").map((s) => s.trim()).filter(Boolean)
    : undefined;

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = parsed.data;

  const html = `
    <p><strong>名前:</strong> ${escapeHtml(name)}</p>
    <p><strong>メール:</strong> ${escapeHtml(email)}</p>
    <p><strong>件名:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(message)}</pre>
  `;

  const text = [
    `名前: ${name}`,
    `メール: ${email}`,
    `件名: ${subject}`,
    "---",
    message,
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    ...(bcc?.length ? { bcc } : {}),
    replyTo: email,
    subject: `[サイトお問い合わせ] ${subject}`,
    html,
    text,
    tags: [
      { name: "source", value: "contact-form" },
      { name: "site", value: "waalsforce-corp" },
    ],
  });

  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[contact] Resend error:", error.name, error.message);
    }
    return { error: userMessageFromResendError(error) };
  }

  if (process.env.NODE_ENV === "development" && data?.id) {
    console.info("[contact] Resend email id:", data.id);
  }

  return { ok: true };
}
