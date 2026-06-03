import type { LocaleConfig } from "../i18n/locales";
import { getLocaleCodes, getLocalizedPath } from "../i18n/locales";
import { absoluteUrl } from "../routing/urls";
import type { SiteMetadata } from "./types";

export type SitemapPage = {
  path?: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

type CreateSitemapInput<Locale extends string> = {
  site: SiteMetadata;
  localeConfig: LocaleConfig<Locale>;
  pages: SitemapPage[];
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function createSitemapXml<Locale extends string>({
  site,
  localeConfig,
  pages,
}: CreateSitemapInput<Locale>) {
  const localeCodes = getLocaleCodes(localeConfig);
  const urls = pages.flatMap((page) =>
    localeCodes.map((locale) => {
      const loc = absoluteUrl(
        site.origin,
        getLocalizedPath(locale, page.path ?? "/"),
      );
      const alternates = localeCodes
        .map((alternateLocale) => {
          const href = absoluteUrl(
            site.origin,
            getLocalizedPath(alternateLocale, page.path ?? "/"),
          );
          return `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternateLocale)}" href="${escapeXml(href)}" />`;
        })
        .join("\n");
      const xDefault = absoluteUrl(
        site.origin,
        getLocalizedPath(localeConfig.defaultLocale, page.path ?? "/"),
      );

      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`,
        page.lastmod
          ? `    <lastmod>${escapeXml(page.lastmod)}</lastmod>`
          : undefined,
        page.changefreq
          ? `    <changefreq>${page.changefreq}</changefreq>`
          : undefined,
        typeof page.priority === "number"
          ? `    <priority>${page.priority.toFixed(1)}</priority>`
          : undefined,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    }),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls.join("\n"),
    "</urlset>",
    "",
  ].join("\n");
}
