import { cn, linkVariants } from "@heroui/styles";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "/company", label: "会社概要" },
  { href: "/services", label: "サービス" },
  { href: "/works", label: "実績" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/legal/tokushoho", label: "特定商取引法に基づく表記" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export function SiteFooter() {
  const linkClass = cn(linkVariants().base(), "text-[var(--color-muted)] hover:text-[var(--color-primary)]");

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-semibold text-[var(--color-ink)]">{siteConfig.brandName}</p>
            <p className="mt-2 max-w-sm text-sm text-[var(--color-muted)]">{siteConfig.description}</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm" aria-label="フッターリンク">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-[var(--color-border)] pt-8 text-center text-xs text-[var(--color-muted)]">
          © {siteConfig.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
