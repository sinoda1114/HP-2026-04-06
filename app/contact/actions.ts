"use server";

import { Resend } from "resend";
import { z } from "zod";
import { escapeHtml } from "@/lib/escape-html";
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
  const hp = formData.get("_hp");
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error:
        "メール送信の設定が完了していません（RESEND_API_KEY）。管理者にお問い合わせください。",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contactEmail;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!from) {
    return {
      error:
        "CONTACT_FROM_EMAIL が未設定です。Resend で検証済みの送信元メールを環境変数に設定してください。",
    };
  }

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = parsed.data;

  const html = `
    <p><strong>名前:</strong> ${escapeHtml(name)}</p>
    <p><strong>メール:</strong> ${escapeHtml(email)}</p>
    <p><strong>件名:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(message)}</pre>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[サイトお問い合わせ] ${subject}`,
    html,
  });

  if (error) {
    return { error: "送信に失敗しました。時間をおいて再度お試しください。" };
  }

  return { ok: true };
}
