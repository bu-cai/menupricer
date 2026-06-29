import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MenuPricer — AI Menu Pricing Tool for Restaurants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fff7ed 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(to right,#f0f0f0 1px,transparent 1px),linear-gradient(to bottom,#f0f0f0 1px,transparent 1px)",
          backgroundSize: "48px 48px", opacity: 0.5,
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse,rgba(234,88,12,0.15) 0%,transparent 70%)",
        }} />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ fontSize: 48 }}>🍽️</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#111827", letterSpacing: "-2px" }}>
            Menu<span style={{ color: "#ea580c" }}>Pricer</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ fontSize: 40, fontWeight: 800, color: "#111827", textAlign: "center", maxWidth: 900, lineHeight: 1.2, marginBottom: 20 }}>
          Stop Guessing. Price Your Menu With AI.
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 24, color: "#6b7280", textAlign: "center", maxWidth: 700, marginBottom: 40 }}>
          Enter food costs → get the perfect price in 30 seconds
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[["500+", "Restaurants"], ["30s", "Time to price"], ["23%", "Avg margin boost"]].map(([n, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#ea580c" }}>{n}</div>
              <div style={{ fontSize: 16, color: "#9ca3af" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: 32, fontSize: 18, color: "#d1d5db" }}>
          aimenupricer.com
        </div>
      </div>
    ),
    { ...size }
  );
}
