import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "会社概要",
  description: `${siteConfig.name}の会社概要・基本情報です。`,
};

export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">会社概要</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        {siteConfig.name}は、生成AIを活用したソリューションとコンサルティングでお客様のビジネスを支援します。
      </p>

      <dl className="mt-10 space-y-6 border-t border-[var(--color-border)] pt-10">
        <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-[var(--color-ink)]">会社名</dt>
          <dd className="text-sm text-[var(--color-muted)]">{siteConfig.legalName}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-[var(--color-ink)]">代表者</dt>
          <dd className="text-sm text-[var(--color-muted)]">{siteConfig.representative}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-[var(--color-ink)]">設立</dt>
          <dd className="text-sm text-[var(--color-muted)]">{siteConfig.founded}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-[var(--color-ink)]">資本金</dt>
          <dd className="text-sm text-[var(--color-muted)]">{siteConfig.capital}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-[var(--color-ink)]">業種</dt>
          <dd className="text-sm text-[var(--color-muted)]">{siteConfig.businessType}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-[var(--color-ink)]">所在地</dt>
          <dd className="text-sm text-[var(--color-muted)]">
            <span className="block">{siteConfig.address.postal}</span>
            {siteConfig.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <p className="mt-10 text-sm text-[var(--color-muted)]">
        その他のお取引条件は
        <Link href="/legal/tokushoho" className="font-medium text-[var(--color-primary)] hover:underline">
          特定商取引法に基づく表記
        </Link>
        をご確認ください。
      </p>
    </div>
  );
}
