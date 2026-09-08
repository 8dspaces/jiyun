import fs from "node:fs";
import path from "node:path";

import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const customDomainFilePath = path.join(process.cwd(), "public", "CNAME");
const customDomain = fs.existsSync(customDomainFilePath)
  ? fs.readFileSync(customDomainFilePath, "utf8").trim()
  : "";
const shouldUseBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !customDomain;
const assetBasePath = shouldUseBasePath ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: assetBasePath,
  assetPrefix: assetBasePath ? `${assetBasePath}/` : undefined,
  env: {
    NEXT_PUBLIC_ASSET_BASE_PATH: assetBasePath,
    NEXT_PUBLIC_SITE_DOMAIN: customDomain,
  },
};

export default nextConfig;
