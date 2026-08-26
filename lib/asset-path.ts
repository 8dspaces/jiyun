const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const shouldUseBasePath = process.env.GITHUB_ACTIONS === "true" && repositoryName;
const assetBasePath = shouldUseBasePath ? `/${repositoryName}` : "";

/**
 * 为静态资源补齐 GitHub Pages 所需的仓库路径前缀。
 *
 * @param path 静态资源原始路径。
 * @returns 返回可用于页面渲染的资源路径。
 */
export function getAssetPath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${assetBasePath}${path}`;
}
