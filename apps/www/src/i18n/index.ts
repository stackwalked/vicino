import { en } from "./en";
import { it } from "./it";
import type { Locale } from "./config";

export const dictionaries = { en, it } as const;

export function useTranslations(locale: Locale) {
  return dictionaries[locale];
}
