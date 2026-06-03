import type { LocaleConfig } from "@vicino/site-kit";

export const locales = ["en", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig = {
  defaultLocale,
  locales: [
    { code: "en", label: "English", languageTag: "en", ogLocale: "en_US" },
    { code: "it", label: "Italiano", languageTag: "it", ogLocale: "it_IT" },
  ],
} satisfies LocaleConfig<Locale>;

export const localeLabels: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
