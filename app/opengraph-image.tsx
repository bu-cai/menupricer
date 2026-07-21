import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MenuPricer — AI Menu Pricing Calculator for Restaurants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D1B2A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Glow circle */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "#E8A020",
            opacity: 0.09,
          }}
        />
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 44 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#E8A020",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            🍽
          </div>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 30, letterSpacing: -0.5 }}>
            Menu<span style={{ color: "#E8A020" }}>Pricer</span>
          </span>
        </div>
        {/* Headline */}
        <div
          style={{
            color: "#fff",
            fontSize: 60,
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 22,
            maxWidth: 820,
            letterSpacing: -2,
          }}
        >
          AI Menu Pricing Calculator for Restaurants
        </div>
        {/* Subtext */}
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 24,
            lineHeight: 1.5,
            maxWidth: 660,
            marginBottom: 44,
          }}
        >
          Know your real food cost and profit margin — in 30 seconds.
        </div>
        {/* Pills */}
        <div style={{ display: "flex", gap: 14 }}>
          {["✓ Free to start", "✓ No credit card", "✓ AI cost estimates"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(232,160,32,0.14)",
                border: "1px solid rgba(232,160,32,0.4)",
                borderRadius: 8,
                padding: "10px 20px",
                color: "#E8A020",
                fontSize: 19,
                fontWeight: 700,
              }}
            >
              {label}
            </div>
          ))}
        </div>
        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            right: 80,
            color: "rgba(255,255,255,0.25)",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          aimenupricer.com
        </div>
      </div>
    ),
    { ...size }
  );
}
