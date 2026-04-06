import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

const staticPaths = [
  "",
  "/company",
  "/services",
  "/works",
  "/profile",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/legal/tokushoho",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const post of getAllPosts()) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return entries;
}
