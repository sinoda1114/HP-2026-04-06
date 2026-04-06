import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.brandName}の個人情報の取り扱いについてです。`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">プライバシーポリシー</h1>

      <div className="prose prose-slate mt-10 max-w-none prose-headings:text-[var(--color-ink)] prose-p:text-[var(--color-muted)] prose-li:text-[var(--color-muted)] prose-a:text-[var(--color-primary)]">
        <p>
          {siteConfig.legalName}（以下「当社」）は、当社が運営するウェブサイト（以下「本サイト」）における個人情報の取り扱いについて、個人情報の保護に関する法律その他の関係法令を遵守し、次のとおり定めます。
        </p>

        <h2>1. 事業者の名称・所在地・お問い合わせ窓口</h2>
        <ul>
          <li>名称：{siteConfig.legalName}</li>
          <li>
            所在地：{siteConfig.address.postal}
            {siteConfig.address.lines.join("")}
          </li>
          <li>
            個人情報に関するお問い合わせ：
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </li>
        </ul>

        <h2>2. 取得する個人情報</h2>
        <p>
          当社は、お問い合わせフォーム等を通じて、氏名、メールアドレス、件名、お問い合わせ内容などを取得する場合があります。
        </p>

        <h2>3. 利用目的</h2>
        <ul>
          <li>お問い合わせへの対応、連絡</li>
          <li>本サイトの運営・不正利用の防止に必要な対応</li>
          <li>法令に基づく対応</li>
        </ul>

        <h2>4. 第三者提供</h2>
        <p>
          法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供しません。
        </p>

        <h2>5. 業務委託・国外での取り扱い</h2>
        <p>
          メール送信・ホスティング等の遂行にあたり、必要な範囲で個人情報の取り扱いを外部に委託することがあります。委託先が国外にある場合には、当該国において個人情報が保存・処理されることがあります。当社は、委託先の選定および監督に努めます。
        </p>

        <h2>6. 安全管理措置</h2>
        <p>
          当社は、個人情報の漏えい、滅失または毀損の防止その他の安全管理のために、必要かつ適切な措置を講じます。
        </p>

        <h2>7. 開示・訂正・利用停止等</h2>
        <p>
          個人情報の開示、訂正、削除、利用の停止等のご請求は、上記お問い合わせ窓口までご連絡ください。ご本人であることを確認のうえ、法令に従い対応します。
        </p>

        <h2>8. Cookie・アクセス解析</h2>
        <p>
          本サイトにおいて、広告配信やアクセス解析のための Cookie
          を用いた第三者のトラッキングは、現時点では行っていません。導入する場合は本ポリシーを改定し、必要に応じてお知らせします。
        </p>

        <h2>9. 本ポリシーの変更</h2>
        <p>
          法令の改正や本サイトの運営の変更等に応じ、本ポリシーを変更することがあります。変更後の内容は本サイト上に掲示した時点から効力を生じます。
        </p>
      </div>
    </div>
  );
}
