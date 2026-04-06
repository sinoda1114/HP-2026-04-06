import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}の個人情報の取り扱いについてです。`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">プライバシーポリシー</h1>
      <p className="mt-4 text-sm text-[var(--color-muted)]">
        最終更新日: {new Date().toISOString().slice(0, 10)}（公開前に実態に合わせて改定してください）
      </p>

      <div className="prose prose-slate mt-10 max-w-none prose-headings:text-[var(--color-ink)] prose-p:text-[var(--color-muted)] prose-li:text-[var(--color-muted)]">
        <p>
          {siteConfig.name}（以下「当社」）は、お客様の個人情報を適切に取り扱うため、本ポリシーに従います。
          <strong className="text-[var(--color-ink)]">
            本ページは一般的なひな型です。フォームの保存方法、解析ツールの有無、第三者提供の実態に合わせて必ず修正・法務確認を行ってください。
          </strong>
        </p>

        <h2>1. 取得する情報</h2>
        <p>当社は、お問い合わせフォーム等を通じて、氏名、メールアドレス、お問い合わせ内容などを取得する場合があります。</p>

        <h2>2. 利用目的</h2>
        <ul>
          <li>お問い合わせへの対応、連絡</li>
          <li>サービス提供に必要なご案内</li>
          <li>法令に基づく対応</li>
        </ul>

        <h2>3. 第三者提供</h2>
        <p>
          法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供しません。メール送信に外部サービス（例: トランザクションメール）を利用する場合は、その委託先に必要な範囲で情報が提供されることがあります。
        </p>

        <h2>4. お問い合わせ</h2>
        <p>
          個人情報の開示・訂正・削除等のご請求は、
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          までご連絡ください。
        </p>
      </div>
    </div>
  );
}
