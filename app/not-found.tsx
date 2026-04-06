import Link from "next/link";
import { cn, buttonVariants } from "@heroui/styles";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold text-[var(--color-primary)]">404</p>
      <h1 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">ページが見つかりません</h1>
      <p className="mt-4 text-sm text-[var(--color-muted)]">
        URL が間違っているか、ページが移動した可能性があります。
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-8 inline-flex")}>
        トップへ戻る
      </Link>
    </div>
  );
}
