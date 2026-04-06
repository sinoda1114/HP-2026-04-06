# 株式会社Waalsforce コーポレートサイト

Next.js（App Router）+ Tailwind CSS で構築したコーポレートサイトです。Vercel へのデプロイを想定しています。

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開きます。

## 環境変数

`.env.example` を `.env.local` にコピーし、値を設定してください。

| 変数 | 説明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 本番の正規 URL（末尾スラッシュなし）。`https://www.waalsforce.com` |
| `RESEND_API_KEY` | Resend の API キー |
| `CONTACT_TO_EMAIL` | フォーム送信の受信先（省略時は `shinoda.y@waalsforce.com`） |
| `CONTACT_FROM_EMAIL` | Resend で検証済みの送信元メール（**必須**） |

お問い合わせフォームは `RESEND_API_KEY` と `CONTACT_FROM_EMAIL` が揃っていないと送信できません。

## ブログ

`content/blog/` に `.mdx` ファイルを追加します。フロントマター例:

```yaml
---
title: 記事タイトル
date: "2026-04-06"
description: 抜粋
draft: false
---
```

`draft: true` の記事は一覧・静的生成から除外されます。

## 主要ルート

- `/` トップ
- `/company` `/services` `/works` `/profile`
- `/blog` `/blog/[slug]`
- `/contact` お問い合わせ（Resend）
- `/privacy` `/terms` `/legal/tokushoho`
- `/sitemap.xml` `/robots.txt` `/feed.xml` `/llms.txt`

## Vercel への接続

1. 本リポジトリを GitHub（など）に push する。
2. [Vercel](https://vercel.com) で New Project → リポジトリをインポート。
3. Framework Preset は Next.js のまま。Root Directory はプロジェクトルート。
4. Environment Variables に上記 `.env.example` と同じキーを登録（Production / Preview 必要に応じて）。
5. Deploy を実行。

### カスタムドメイン（Cloudflare DNS）

- Vercel プロジェクトの **Settings → Domains** で `www.waalsforce.com`（および必要なら `waalsforce.com`）を追加する。
- Cloudflare の DNS で、Vercel が示す **CNAME**（例: `cname.vercel-dns.com`）または **A レコード** に合わせて設定する。
- **既存の MX レコード（メール受信）は変更しない**こと。サイト用の A/CNAME のみを Vercel 向けに更新する。
- `waalsforce.com` と `www.waalsforce.com` のどちらを正とするか決め、Vercel の **Redirect** でもう一方へ 301 する（重複インデックス防止）。

### 旧 Cloudflare Pages からの切替

- 旧ホストで提供していた URL から新サイトへ **301 リダイレクト** を設定できる場合は設定する。
- 公開後、Google Search Console で **sitemap**（`https://www.waalsforce.com/sitemap.xml`）を再送信する。

### Resend（本番）

1. Resend で `waalsforce.com` ドメインを追加し、DNS に表示される **SPF / DKIM** を Cloudflare に登録する。
2. `CONTACT_FROM_EMAIL` には検証済みドメイン上のアドレス（例: `お問い合わせ <noreply@waalsforce.com>`）を使う。

## ビルド

```bash
npm run build
npm start
```

## ライセンス

プライベート。株式会社Waalsforce。
