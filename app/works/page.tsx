import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "実績",
  description: "守秘義務に配慮し、具体的な社名は非公開としたプロジェクト事例の一例です。",
};

const cases = [
  {
    industry: "製造業（従業員数百名規模）",
    scope: "社内ナレッジ検索・問い合わせ業務の効率化",
    outcome: "定型問い合わせの削減と、担当者のリードタイム短縮に寄与。",
  },
  {
    industry: "IT・サービス業",
    scope: "生成AIを用いたドキュメント下書き・レビュー補助",
    outcome: "初稿作成時間の短縮と、表現のばらつき低減を支援。",
  },
  {
    industry: "小売・EC",
    scope: "商品説明・キャンペーン文案の生成パイロット",
    outcome: "運用ルール設計と品質ゲートウェイを伴う段階的導入を実施。",
  },
];

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">実績</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        守秘契約およびお客様のご意向により、具体的な社名・固有名詞は掲載しておりません。業種や規模感、担当範囲のイメージとしてご参照ください。
      </p>

      <ul className="mt-10 space-y-8">
        {cases.map((c) => (
          <li
            key={c.industry}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              匿名事例
            </p>
            <h2 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">{c.industry}</h2>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              <span className="font-medium text-[var(--color-ink)]">担当範囲: </span>
              {c.scope}
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              <span className="font-medium text-[var(--color-ink)]">成果の方向性: </span>
              {c.outcome}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
