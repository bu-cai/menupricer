import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#ea580c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 100 100">
          <rect x="17" y="11" width="8" height="40" rx="4" fill="white" />
          <rect x="30" y="11" width="8" height="40" rx="4" fill="white" />
          <rect x="43" y="11" width="8" height="40" rx="4" fill="white" />
          <path d="M17 49 Q34 63 51 49 L51 62 Q34 71 17 62 Z" fill="white" />
          <rect x="29.5" y="61" width="9" height="29" rx="4.5" fill="white" />
          <polyline points="18,80 36,62 47,70 74,26" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <polygon points="74,26 62,22 65,34" fill="white" />
          <path d="M83,15 L85.5,9 L88,15 L94,17.5 L88,20 L85.5,26 L83,20 L77,17.5 Z" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
