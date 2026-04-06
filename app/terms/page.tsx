import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${siteConfig.name}のウェブサイト利用規約です。`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">利用規約</h1>
      <p className="mt-4 text-sm text-[var(--color-muted)]">
        最終更新日: {new Date().toISOString().slice(0, 10)}（公開前に法務確認のうえ改定してください）
      </p>

      <div className="prose prose-slate mt-10 max-w-none prose-headings:text-[var(--color-ink)] prose-p:text-[var(--color-muted)] prose-li:text-[var(--color-muted)]">
        <p>
          本ウェブサイト（以下「本サイト」）の利用にあたり、以下の事項にご同意いただくものとします。本規約は必要に応じて変更されることがあります。
        </p>

        <h2>第1条（適用）</h2>
        <p>
          本規約は、{siteConfig.name}（以下「当社」）が運営する本サイトの利用条件を定めるものです。
        </p>

        <h2>第2条（禁止事項）</h2>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>当社または第三者の権利を侵害する行為</li>
          <li>本サイトの運営を妨害する行為</li>
          <li>不正アクセス、スクリプトによる過度な負荷の付与等</li>
        </ul>

        <h2>第3条（免責）</h2>
        <p>
          本サイトに掲載する情報の正確性には努めますが、その完全性を保証するものではありません。本サイトの利用により生じた損害について、当社の故意または重過失による場合を除き責任を負いません。
        </p>

        <h2>第4条（準拠法・管轄）</h2>
        <p>本規約は日本法に準拠し、本サイトに関する紛争は当社所在地を管轄する裁判所を専属的合意管轄とします。</p>
      </div>
    </div>
  );
}
