import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MenuPricer — Free Menu Calculator & AI Pricing Tool for Restaurants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fff7ed",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            🍽️
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: "#f97316" }}>MenuPricer</span>
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#1f2937",
            lineHeight: 1.1,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span>Free Menu Calculator</span>
          <span style={{ color: "#f97316" }}>&amp; AI Pricing Tool</span>
          <span style={{ fontSize: 36, fontWeight: 400, color: "#6b7280", marginTop: 24 }}>
            for Restaurants
          </span>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {["✓ Food Cost Calculator", "✓ 3 Pricing Tiers", "✓ PDF Export", "✓ Free to Start"].map(
            (f) => (
              <div
                key={f}
                style={{
                  background: "#fff",
                  border: "2px solid #fed7aa",
                  borderRadius: 999,
                  padding: "10px 24px",
                  fontSize: 22,
                  color: "#92400e",
                  fontWeight: 600,
                }}
              >
                {f}
              </div>
            )
          )}
        </div>

        <div style={{ marginTop: 32, fontSize: 22, color: "#9ca3af" }}>
          aimenupricer.com
        </div>
      </div>
    ),
    { ...size }
  );
}
