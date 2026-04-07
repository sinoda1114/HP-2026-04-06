import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.brandName}へのお問い合わせフォームです。`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">お問い合わせ</h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          ご質問・ご相談は下記フォーム、またはメール
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mx-1 font-medium text-[var(--color-primary)] hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          よりお送りください。
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </ScrollReveal>
    </div>
  );
}
