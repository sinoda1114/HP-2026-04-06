import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: `${siteConfig.name}の特定商取引法に基づく表記です。`,
};

export default function TokushohoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
        特定商取引法に基づく表記
      </h1>

      <dl className="mt-10 space-y-6">
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">法人名</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">{siteConfig.legalName}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">所在地</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            {siteConfig.address.postal}
            <br />
            {siteConfig.address.lines.join(" ")}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">電話番号</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">{siteConfig.phone}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">メールアドレス</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[var(--color-primary)] hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">代表者</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            {siteConfig.representative.replace(/\s/g, "")}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">販売価格</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">各商品ページに記載</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">支払方法</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            <ul className="list-disc pl-5">
              <li>クレジットカード決済</li>
              <li>銀行振込</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">代金の支払時期</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            <p>クレジットカード決済：クレジットカード情報入力時に決済が完了します。</p>
            <p className="mt-2">
              （引落し日は、ご契約のクレジットカード会社の締め日・支払日をご確認ください。）
            </p>
            <p className="mt-2">銀行振込：注文後3日以内</p>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">商品の引渡時期</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            注文確定後、即時提供（デジタルサービス・オンラインサービス）
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">商品の引渡方法</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            メールにてアクセス情報・ライセンス等を送付
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">返品・交換</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">
            <ul className="list-disc pl-5">
              <li>お客様都合による返品・交換は不可</li>
              <li>商品に不備がある場合、当社負担で交換</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">販売数量</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">制限なし</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">動作環境</dt>
          <dd className="mt-1 text-sm text-[var(--color-muted)]">各商品ページに記載</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-[var(--color-ink)]">商品の瑕疵に関する責任</dt>
          <dd className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
            弊社のサービス・ソフトウェアに瑕疵があった場合、別に定める方法により対応いたします。ただし、本サービスの瑕疵に起因する直接的または間接的損害については、当社の故意または重大な過失による場合を除き、一切責任を負いません。
          </dd>
        </div>
      </dl>
    </div>
  );
}
