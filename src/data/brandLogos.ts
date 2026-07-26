import {
  siAngular,
  siCraftcms,
  siExpress,
  siHubspot,
  siMongodb,
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
} as const;

export type BrandLogoId = keyof typeof brandLogos;
