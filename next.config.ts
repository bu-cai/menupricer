import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 2026-07-28 content consolidation.
      // Six overlapping food-costing articles were competing for the same
      // queries. Unique sections were merged into the surviving pages before
      // these URLs were retired. Permanent (308) so Google transfers signals.
      {
        source: "/blog/how-to-cost-a-menu-item",
        destination: "/blog/how-to-cost-a-dish",
        permanent: true,
      },
      {
        source: "/blog/how-to-calculate-food-cost",
        destination: "/blog/food-cost-formula",
        permanent: true,
      },
      {
        source: "/blog/how-to-do-food-costing",
        destination: "/blog/food-cost-percentage-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
