import { normalizePath } from "../routing/urls";

export type LocaleDefinition<Locale extends string = string> = {
  code: Locale;
  label: string;
  languageTag?: string;
  ogLocale?: string;
};

export type LocaleConfig<Locale extends string = string> = {
  locales: readonly LocaleDefinition<Locale>[];
  defaultLocale: Locale;
};

export function getLocaleCodes<Locale extends string>(
  config: LocaleConfig<Locale>,
) {
  return config.locales.map((locale) => locale.code) as Locale[];
}

export function isConfiguredLocale<Locale extends string>(
  config: LocaleConfig<Locale>,
  value: string | undefined,
): value is Locale {
  return Boolean(
    value && config.locales.some((locale) => locale.code === value),
  );
}

export function getLocaleDefinition<Locale extends string>(
  config: LocaleConfig<Locale>,
  locale: Locale,
) {
  return config.locales.find((definition) => definition.code === locale);
}

export function getLocalizedPath<Locale extends string>(
  locale: Locale,
  path = "/",
) {
  const normalizedPath = normalizePath(path);
  const suffix =
    normalizedPath === "/" ? "" : normalizedPath.replace(/^\//, "");

  return normalizePath(`/${locale}/${suffix}`);
}

export function getLocaleFromPath<Locale extends string>(
  config: LocaleConfig<Locale>,
  pathname: string,
) {
  const [, segment] = pathname.split("/");
  return isConfiguredLocale(config, segment) ? segment : config.defaultLocale;
}
