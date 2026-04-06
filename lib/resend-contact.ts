import type { ErrorResponse } from "resend";

/** Resend のエラーコードをユーザー向け日本語に変換（API 詳細は出さない） */
export function userMessageFromResendError(error: ErrorResponse): string {
  switch (error.name) {
    case "invalid_api_key":
    case "missing_api_key":
    case "restricted_api_key":
      return "メール送信の設定に問題があります。管理者にお問い合わせください。";
    case "invalid_from_address":
      return "送信元メールの設定が正しくありません。管理者にお問い合わせください。";
    case "rate_limit_exceeded":
    case "daily_quota_exceeded":
    case "monthly_quota_exceeded":
      return "送信が集中しています。しばらく時間をおいて再度お試しください。";
    case "validation_error":
      if (
        error.message.includes("only send testing emails") ||
        error.message.includes("verify a domain")
      ) {
        return "テスト送信では Resend に登録した受信メールのみ届きます。環境変数 CONTACT_TO_EMAIL を確認するか、ドメインを検証してください。";
      }
      return "送信内容を確認できませんでした。入力内容をご確認ください。";
    case "missing_required_field":
    case "invalid_parameter":
      return "送信内容を確認できませんでした。入力内容をご確認ください。";
    default:
      return "送信に失敗しました。時間をおいて再度お試しください。";
  }
}

const RESEND_DEV_FROM = "onboarding@resend.dev";

/**
 * 送信元を決定する。
 * - 本番・通常: CONTACT_FROM_EMAIL 必須
 * - 検証用: CONTACT_USE_RESEND_DEV_SENDER=true のとき onboarding@resend.dev（宛先は Resend アカウントの検証メールに限られる）
 */
export function resolveContactFromEmail(): { from: string } | { error: string } {
  const configured = process.env.CONTACT_FROM_EMAIL?.trim();
  if (configured) {
    return { from: configured };
  }

  const useDev =
    process.env.CONTACT_USE_RESEND_DEV_SENDER === "true" ||
    process.env.CONTACT_USE_RESEND_DEV_SENDER === "1";
  if (useDev) {
    return { from: `サイトお問い合わせ <${RESEND_DEV_FROM}>` };
  }

  return {
    error:
      "CONTACT_FROM_EMAIL が未設定です。本番では Resend で検証済みの送信元を設定するか、検証時のみ CONTACT_USE_RESEND_DEV_SENDER=1 と API キーを設定してください。",
  };
}
