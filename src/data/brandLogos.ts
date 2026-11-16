import {
  siAngular,
  siClaude,
  siCraftcms,
  siDrupal,
  siExpress,
  siHubspot,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siShopify,
  siTypescript,
  siVuedotjs,
  siWordpress,
} from "simple-icons";

/** Brand marks are bundled as inline SVG paths, so no icon CDN is needed. */
export const brandLogos = {
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  node: siNodedotjs,
  angular: siAngular,
  vue: siVuedotjs,
  express: siExpress,
  mongodb: siMongodb,
  wordpress: siWordpress,
  craftcms: siCraftcms,
  shopify: siShopify,
  hubspot: siHubspot,
  drupal: siDrupal,
  llm: { ...siClaude, title: "AI / LLM APIs" },
  // No official mark in simple-icons; the marquee shows the name only.
  playwright: { title: "Playwright", path: "" },
} as const;

export type BrandLogoId = keyof typeof brandLogos;
