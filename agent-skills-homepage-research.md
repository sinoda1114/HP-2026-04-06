以下、今回の会話のまとめです。

---

## Agent Skills エコシステムにおける「ホームページ作成」スキルの調査まとめ

### 調査の目的
ホームページ（Webサイト/ランディングページ）を作成するためのAgent Skillがどこから提供されているかを整理する。

---

### 1. Anthropic公式スキル
- **リポジトリ**: https://github.com/anthropics/skills
- **該当スキル**: `frontend-design`
  - Webサイト、ランディングページ、ダッシュボード、Reactコンポーネント、HTML/CSSレイアウトの作成に対応
  - 「AIっぽいありきたりなデザイン」を避け、プロダクション品質の個性的なUIを生成することに特化
  - タイポグラフィ、配色、アニメーション、レイアウト構成、背景テクスチャなどの詳細なガイドライン付き
  - Claude.aiの「ファイル作成」機能にも組み込まれている
- **その他の公式スキル**: `skill-creator`, `docx`, `xlsx`, `pptx`, `pdf`, `file-reading` など

### 2. Vercel公式スキル
- **リポジトリ**: https://github.com/vercel-labs/agent-skills
- **提供スキル**:
  - `react-best-practices` — React/Next.jsパフォーマンス最適化（40+ルール、8カテゴリ）
  - `web-design-guidelines` — UIコードのベストプラクティス監査（100+ルール、アクセシビリティ・パフォーマンス・UX）
- **ホームページ作成スキルは無し** — あくまでレビュー・最適化が中心

### 3. コミュニティ製スキル（skills.sh等で公開）
- `landing-page-builder`（majesticlabs-dev/majestic-marketplace）
- `landing-page-copywriter`（onewave-ai/claude-skills）— コピーライティング特化
- `marketingskills`（coreyhaines31/marketingskills）— page-cro, copywriting, seo-audit 等を含むマーケティング系スキル集

### 4. スキルのエコシステム全体像
- **skills.sh**: Vercelが運営するAgent Skillsのオープンディレクトリ（npmのスキル版）
- **インストール方法**: `npx skills add <owner/repo> --skill <skill-name>`
- **対応エージェント**: Claude Code, Cursor, Codex, Gemini CLI, OpenCode, Windsurf 等40以上
- **スキルの形式**: `SKILL.md`ファイル（YAMLフロントマター + Markdown指示書）によるオープン標準仕様

### 結論
ホームページ作成に最も直結するスキルは **Anthropic公式の `frontend-design`**。Vercel公式はレビュー・最適化系のみで、作成系スキルは提供していない。コミュニティ製にはランディングページ特化のものがいくつか存在する。

---

