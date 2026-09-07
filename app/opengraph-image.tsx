import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  background: "#03080c",
  foreground: "#dee6ea",
  muted: "#75838a",
  teal: "#3dc6b1",
  purple: "#ad87ed",
};

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: COLORS.background,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 4,
            backgroundColor: COLORS.teal,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: COLORS.foreground,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: COLORS.teal,
            marginTop: 16,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: COLORS.muted,
            marginTop: 24,
          }}
        >
          {siteConfig.location} · Next.js · React · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
