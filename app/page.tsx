import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  {
    title: "生成AIソリューション",
    body: "テキスト・画像・音声など多様な生成AIを活用し、業務効率化と新しい価値創造を支援します。",
  },
  {
    title: "導入コンサルティング",
    body: "戦略立案から実装まで一貫して伴走。最適なツール選定と現場への定着までサポートします。",
  },
  {
    title: "伴走型支援",
    body: "お客様の事業内容と制約を踏まえ、無理のないロードマップで段階的な成果を目指します。",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[min(32rem,70vh)] overflow-hidden border-b border-[var(--color-border)]">
        {/* 背景画像（装飾）— public/hero-waalsforce.png を配置 */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/hero-waalsforce.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            aria-hidden
          />
          {/* 可読性のためのグラデーション（左寄せコピー向け） */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/55 sm:via-white/88 sm:to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30 sm:from-white/50" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-ink)] drop-shadow-sm sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)] drop-shadow-sm">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-primary-dark)]"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] bg-white/90 px-6 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-sm backdrop-blur-sm transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                サービスを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-ink)]">私たちの強み</h2>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
          生成AIの可能性を、実務に落ちる形でお届けします。
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="h-1 w-12 rounded-full bg-[var(--color-accent)]" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-ink)]">実績・プロフィール</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              具体的な社名は非公開とした事例や、担当者の経歴をご紹介しています。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/works"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] ring-1 ring-[var(--color-border)] hover:ring-[var(--color-primary)]"
            >
              実績を見る
            </Link>
            <Link
              href="/profile"
              className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
            >
              プロフィール
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-ink)]">ブログ</h2>
            <p className="mt-2 text-[var(--color-muted)]">技術・事例・運用のヒントを発信します。</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            記事一覧へ
          </Link>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[var(--color-primary)] px-8 py-12 text-center text-white sm:px-12">
            <h2 className="text-2xl font-bold">まずはお気軽にご相談ください</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/90">
              課題整理からご一緒します。フォームまたはメールでお問い合わせいただけます。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
