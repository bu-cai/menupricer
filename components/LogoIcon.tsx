export default function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MenuPricer logo"
    >
      {/* Orange rounded background */}
      <rect width="100" height="100" rx="22" fill="#ea580c" />

      {/* Fork — 3 tines */}
      <rect x="17" y="11" width="8" height="40" rx="4" fill="white" />
      <rect x="30" y="11" width="8" height="40" rx="4" fill="white" />
      <rect x="43" y="11" width="8" height="40" rx="4" fill="white" />

      {/* Fork shoulder connecting tines to handle */}
      <path d="M17 49 Q34 63 51 49 L51 62 Q34 71 17 62 Z" fill="white" />

      {/* Fork handle */}
      <rect x="29.5" y="61" width="9" height="29" rx="4.5" fill="white" />

      {/* Trend chart line: dip then rise */}
      <polyline
        points="18,80 36,62 47,70 74,26"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Arrow head */}
      <polygon points="74,26 62,22 65,34" fill="white" />

      {/* 4-pointed sparkle star */}
      <path
        d="M83,15 L85.5,9 L88,15 L94,17.5 L88,20 L85.5,26 L83,20 L77,17.5 Z"
        fill="white"
      />
    </svg>
  );
}
