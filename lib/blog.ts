import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  draft?: boolean;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: (data.date as string) ?? "",
        description: data.description as string | undefined,
        draft: Boolean(data.draft),
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostSource(slug: string): string | null {
  for (const ext of ["mdx", "md"]) {
    const p = path.join(postsDirectory, `${slug}.${ext}`);
    if (fs.existsSync(p)) {
      return fs.readFileSync(p, "utf8");
    }
  }
  return null;
}

export function postExists(slug: string): boolean {
  return getPostSource(slug) !== null;
}
