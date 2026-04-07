import type { Metadata } from "next";
import { Card } from "@heroui/react/card";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "実績",
  description:
    "守秘義務に配慮し社名は非公開とした、生成AI関連プロジェクトの担当範囲の一例です。",
};

const cases = [
  {
    segment: "大手広告代理店グループ",
    description:
      "生成AI基盤（Azure）を前提とした自動タグ付けシステムの要件整理、調査、設計、資料作成、ベンダー調整",
  },
  {
    segment: "大手SIerグループ A",
    description:
      "生成AI基盤案件の非機能要件調査。データ基盤リプレースに伴う上流工程（課題整理、調査、資料作成）",
  },
  {
    segment: "AIデータ関連スタートアップ",
    description: "大手通信キャリア向けDify RAG投入用データの整形・クレンジング",
  },
  {
    segment: "Big4コンサルティングファーム",
    description:
      "生成AI基盤のAWS非機能要件における設計書作成、調査・構築、Terraformリファクタリング",
  },
  {
    segment: "大手ITサービス企業",
    description:
      "生成AI推進チームへのアドバイザリー（Microsoft Copilot、Dify、AWS Bedrockなど）",
  },
  {
    segment: "アプリ開発企業",
    description: "AWS設計全般、特にセキュリティ領域のアドバイザリー",
  },
  {
    segment: "内装・建設業",
    description: "生成AIサービス利用におけるプロンプト設計・性能評価",
  },
  {
    segment: "SaaS企業",
    description: "Copilot Studioを活用したブログチェックツールの検証",
  },
  {
    segment: "IT企業 / スタートアップ",
    description:
      "Dify RAGチャットボット開発、AWSコスト削減・最適化、AWS運用保守",
  },
  {
    segment: "大手SIerグループ B",
    description:
      "生成AIコンサルティング・技術検証。Microsoft Copilot調査/検証、Power Automate検証・開発",
  },
  {
    segment: "ヘルスケア系IT企業",
    description:
      "Amazon BedrockによるRAG検証、Agents機能（Function Calling）検証、GPTs検証",
  },
  {
    segment: "大手外資系食品メーカー",
    description: "プロンプトエンジニアリング",
  },
  {
    segment: "中堅SIer",
    description:
      "生成AIのPoC。Python開発、LLM選定、LangChain SQLDatabaseChain・LlamaIndex・Open Interpreter検証",
  },
] as const;

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">実績</h1>
        <p className="mt-4 text-[var(--color-muted)]">
          守秘契約およびお客様のご意向により、具体的な社名・固有名詞は掲載しておりません。業種や規模感、担当範囲のイメージとしてご参照ください。
        </p>

        <h2 className="mt-12 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
          生成AI関連プロジェクト実績
        </h2>
      </ScrollReveal>

      <ul className="mt-8 space-y-8">
        {cases.map((c) => (
          <li key={c.segment}>
            <ScrollReveal>
              <Card variant="secondary" className="shadow-sm">
              <Card.Content>
                <Card.Title className="text-lg font-semibold text-[var(--color-ink)]">{c.segment}</Card.Title>
                <Card.Description className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {c.description}
                </Card.Description>
              </Card.Content>
            </Card>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
