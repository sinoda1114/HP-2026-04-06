/** 同一 IP からの短時間連投を抑止（サーバーレスではインスタンスごとに独立する点に注意） */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

const timestampsByKey = new Map<string, number[]>();

export function checkContactRateLimit(key: string): boolean {
  const now = Date.now();
  const list = timestampsByKey.get(key) ?? [];
  const recent = list.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_SUBMISSIONS) {
    return false;
  }
  recent.push(now);
  timestampsByKey.set(key, recent);
  return true;
}
