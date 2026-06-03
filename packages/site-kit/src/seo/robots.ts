import { absoluteUrl } from "../routing/urls";
import type { SiteMetadata } from "./types";

type RobotsOptions = {
  site: SiteMetadata;
  sitemapPath?: string;
  disallow?: string[];
};

export function createRobotsTxt({
  site,
  sitemapPath = "/sitemap.xml",
  disallow = [],
}: RobotsOptions) {
  const rules = ["User-agent: *"];

  if (disallow.length === 0) {
    rules.push("Allow: /");
  } else {
    rules.push(...disallow.map((path) => `Disallow: ${path}`));
  }

  rules.push("", `Sitemap: ${absoluteUrl(site.origin, sitemapPath)}`);

  return `${rules.join("\n")}\n`;
}
