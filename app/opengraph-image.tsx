import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME } from "./site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/3pts-logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 56,
        }}
      >
        <img src={logoSrc} width={819} height={183} alt="" />
        <div
          style={{
            fontSize: 34,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#026938",
          }}
        >
          Fractional CMO services for financial markets
        </div>
      </div>
    ),
    size,
  );
}
