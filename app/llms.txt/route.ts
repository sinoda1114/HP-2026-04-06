import { siteConfig } from "@/lib/site-config";

export async function GET() {
  const base = siteConfig.url;

  const body = `# ${siteConfig.brandName}

> ${siteConfig.description}

## 会社・サービス

- [会社概要](${base}/company): 基本情報・所在地
- [サービス](${base}/services): 生成AIソリューション・導入コンサルティング

## お問い合わせ

- [お問い合わせフォーム](${base}/contact): Webフォーム
- メールでのお問い合わせ: ${siteConfig.contactEmail}

## 法務・ポリシー

- [特定商取引法に基づく表記](${base}/legal/tokushoho)
- [プライバシーポリシー](${base}/privacy)
- [利用規約](${base}/terms)

## ブログ

- [ブログ一覧](${base}/blog)
- [RSS フィード](${base}/feed.xml)

## Optional

- [実績（匿名事例）](${base}/works): 生成AI関連プロジェクトの担当範囲の一例（社名非公開）
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
