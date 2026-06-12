import {
  getLocalizedPath as getSiteKitLocalizedPath,
  type SiteMetadata,
} from "@vicino/site-kit";
import type { Locale } from "../i18n/config";

export const site = {
  name: "VICINO",
  origin: "https://byvicino.it",
} as const satisfies SiteMetadata;

export function getLocalizedPath(locale: Locale, path = "/") {
  return getSiteKitLocalizedPath(locale, path);
}
