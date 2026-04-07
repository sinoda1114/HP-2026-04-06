import { redirect } from "next/navigation";

/**
 * 旧 URL・ブックマーク用。プロフィールページは設けずトップへ寄せる。
 */
export default function ProfileRedirectPage() {
  redirect("/");
}
