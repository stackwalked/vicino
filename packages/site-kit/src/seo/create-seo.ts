import type { LocaleConfig } from "../i18n/locales";
import { getLocaleCodes, getLocalizedPath } from "../i18n/locales";
import { absoluteUrl } from "../routing/urls";
import type { SeoMetadata, SiteMetadata } from "./types";

type CreateSeoInput<Locale extends string> = {
  site: SiteMetadata;
  localeConfig: LocaleConfig<Locale>;
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  robots?: string;
};

export function createSeoMetadata<Locale extends string>({
  site,
  localeConfig,
  locale,
  title,
  description,
  path = "/",
  image = site.defaultOgImage,
  robots,
}: CreateSeoInput<Locale>): SeoMetadata<Locale> {
  const canonical = absoluteUrl(site.origin, getLocalizedPath(locale, path));
  const alternates = getLocaleCodes(localeConfig).map((alternateLocale) => ({
    locale: alternateLocale,
    href: absoluteUrl(site.origin, getLocalizedPath(alternateLocale, path)),
  }));
  const xDefault = absoluteUrl(
    site.origin,
    getLocalizedPath(localeConfig.defaultLocale, path),
  );

  return {
    title,
    description,
    canonical,
    imageUrl: image ? absoluteUrl(site.origin, image) : undefined,
    alternates,
    xDefault,
    robots,
  };
}
