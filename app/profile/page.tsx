import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "代表の経歴・専門領域（守秘に配慮した概要）です。",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">プロフィール</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        過去の所属企業名やプロジェクト固有名は非公開としております。スキルと関心領域の概要のみ記載します。
      </p>

      <section className="mt-10 rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-[var(--color-ink)]">専門・関心領域</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
          <li>大規模言語モデル（LLM）を活用した業務設計・プロトタイピング</li>
          <li>生成AIの評価、ガバナンス、セキュリティに配慮した導入設計</li>
          <li>クラウドを前提としたアプリケーション開発・運用（複数業界での経験）</li>
          <li>技術選定、要件整理、ステークホルダーとの合意形成</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
        <h2 className="text-lg font-semibold text-[var(--color-ink)]">経歴（概要）</h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          ソフトウェアエンジニアリングおよびアーキテクチャ設計を経て、近年は生成AIを中心としたコンサルティングとソリューション提供に従事。
          スタートアップからエンタープライズまで、プロダクト開発とDX推進の両面で支援してきました。
        </p>
      </section>
    </div>
  );
}
