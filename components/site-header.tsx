"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold text-[var(--color-ink)]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/mark.jpg"
            alt={`${siteConfig.brandName} ロゴ`}
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-sm object-contain"
            priority
          />
          <span className="hidden text-sm sm:inline">{siteConfig.brandName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-ink)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">メニュー</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--color-border)] bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
