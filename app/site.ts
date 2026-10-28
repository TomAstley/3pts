export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_NAME = "Three Points Communications";
export const SITE_TITLE = "3Points | Fractional CMO Services for Financial Markets";
export const SITE_DESCRIPTION =
  "Three Points Communications provides fractional CMO services for the buy side, sell side, and liquidity networks.";
