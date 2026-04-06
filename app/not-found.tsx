import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold text-[var(--color-primary)]">404</p>
      <h1 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">ページが見つかりません</h1>
      <p className="mt-4 text-sm text-[var(--color-muted)]">
        URL が間違っているか、ページが移動した可能性があります。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
      >
        トップへ戻る
      </Link>
    </div>
  );
}
