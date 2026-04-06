import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ブログ",
  description: `${siteConfig.name}のブログ・お知らせです。`,
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">ブログ</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        技術・事例・運用に関する記事を順次公開します。
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-sm text-[var(--color-muted)]">記事を準備中です。</p>
      ) : (
        <ul className="mt-12 space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-[var(--color-border)] pb-8">
              <time
                dateTime={post.date}
                className="text-xs font-medium text-[var(--color-primary)]"
              >
                {post.date}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[var(--color-primary)] hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              {post.description ? (
                <p className="mt-2 text-sm text-[var(--color-muted)]">{post.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
