export const siteConfig = {
  name: "株式会社Waalsforce",
  legalName: "株式会社Waalsforce",
  tagline: "AIで未来を創造する",
  description:
    "最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます。",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.waalsforce.com",
  contactEmail: "shinoda.y@waalsforce.com",
  address: {
    postal: "〒150-0043",
    lines: [
      "東京都渋谷区道玄坂1丁目10番8号",
      "渋谷道玄坂東急ビル2F-C",
    ],
  },
  phone: "080-5299-7686",
  representative: "篠田 敬廣",
  founded: "2024年5月7日",
  capital: "1,000,000円",
  businessType: "サービス業（コンサルティング）",
} as const;

export const navItems = [
  { href: "/company", label: "会社概要" },
  { href: "/services", label: "サービス" },
  { href: "/works", label: "実績" },
  { href: "/profile", label: "プロフィール" },
  { href: "/blog", label: "ブログ" },
  { href: "/contact", label: "お問い合わせ" },
] as const;
