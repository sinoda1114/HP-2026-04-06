import type { Metadata } from "next";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { cn, buttonVariants, linkVariants } from "@heroui/styles";
import { getAllPosts, getPostSource, postExists } from "@/lib/blog";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

type BlogFrontmatter = {
  title: string;
  date: string;
  description?: string;
  draft?: boolean;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!postExists(slug)) return {};
  const source = getPostSource(slug);
  if (!source) return {};
  const { data } = matter(source);
  const fm = data as BlogFrontmatter;
  if (fm.draft) return {};
  return {
    title: fm.title,
    description: fm.description,
    openGraph: {
      title: fm.title,
      description: fm.description,
      type: "article",
      publishedTime: fm.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!postExists(slug)) notFound();

  const source = getPostSource(slug);
  if (!source) notFound();

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  if (frontmatter.draft) notFound();

  const backLinkClass = cn(
    buttonVariants({ variant: "ghost", size: "sm" }),
    linkVariants().base(),
    "text-[var(--color-primary)]",
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <ScrollReveal>
        <Link href="/blog" className={backLinkClass}>
          ← ブログ一覧
        </Link>
        <header className="mt-6 border-b border-[var(--color-border)] pb-8">
          <time
            dateTime={frontmatter.date}
            className="text-sm font-medium text-[var(--color-primary)]"
          >
            {frontmatter.date}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)]">
            {frontmatter.title}
          </h1>
          {frontmatter.description ? (
            <p className="mt-4 text-[var(--color-muted)]">{frontmatter.description}</p>
          ) : null}
        </header>
      </ScrollReveal>
      <ScrollReveal className="prose prose-slate mt-10 max-w-none prose-headings:text-[var(--color-ink)] prose-a:text-[var(--color-primary)]">
        {content}
      </ScrollReveal>
      <ScrollReveal as="footer" className="mt-16 border-t border-[var(--color-border)] pt-8">
        <p className="text-sm text-[var(--color-muted)]">{siteConfig.brandName}</p>
      </ScrollReveal>
    </article>
  );
}
