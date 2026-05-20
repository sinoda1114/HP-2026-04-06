import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

const SOURCE = path.join(process.cwd(), "public/favicon-source.png");

/**
 * タブ用アイコンでマークが窮屈・全面に見えないよう、キャンバス内で一回り小さく中央配置する。
 * 1 に近いほど全面に近い。小さくするほど余白が増える。
 */
export const FAVICON_INNER_SCALE = 0.85;

/** 出力 PNG の外枠の角丸（キャンバス一辺に対する比率）。タブ表示でも角が丸く見えるようにする */
export const FAVICON_OUTER_RADIUS_RATIO = 0.22;

export async function createPaddedFaviconPng(outputSize: number) {
  const buffer = await readFile(SOURCE);
  const base64 = buffer.toString("base64");
  const inner = Math.max(1, Math.round(outputSize * FAVICON_INNER_SCALE));
  const outerRadius = Math.round(outputSize * FAVICON_OUTER_RADIUS_RATIO);

  return new ImageResponse(
    (
      <div
        style={{
          width: outputSize,
          height: outputSize,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: outerRadius,
          overflow: "hidden",
        }}
      >
        {/* ImageResponse では next/image が使えない */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={`data:image/png;base64,${base64}`}
          width={inner}
          height={inner}
          style={{
            width: inner,
            height: inner,
            objectFit: "contain",
          }}
        />
      </div>
    ),
    { width: outputSize, height: outputSize },
  );
}
