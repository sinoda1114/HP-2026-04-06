import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "サービス",
  description: `${siteConfig.name}の生成AIソリューションおよび導入コンサルティングのご案内です。`,
};

const services = [
  {
    title: "生成AIソリューションの提供",
    body: [
      "最新の生成AI技術を活用し、お客様のビジネスに最適なソリューションを提供します。",
      "テキスト生成、画像生成、音声生成など、様々な分野でAIの力を活用し、業務効率化や新しい価値の創造をサポートします。",
    ],
  },
  {
    title: "AIの導入コンサルティング",
    body: [
      "AI導入の戦略立案から実装まで、包括的なコンサルティングサービスを提供します。",
      "お客様のビジネスニーズを深く理解し、最適なAIソリューションの選定とスムーズな導入をサポートします。",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">サービス</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        {siteConfig.name}が提供する主なサービスをご紹介します。詳細はお問い合わせください。
      </p>

      <ul className="mt-12 space-y-10">
        {services.map((s) => (
          <li
            key={s.title}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm"
          >
            <div className="h-1 w-14 rounded-full bg-[var(--color-primary)]" aria-hidden />
            <h2 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">{s.title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
