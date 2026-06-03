import {
  getLocalizedPath as getSiteKitLocalizedPath,
  type SiteMetadata,
} from "@vicino/site-kit";
import type { Locale } from "../i18n/config";

export const site = {
  name: "Vicino",
  origin: "https://byvicino.it",
  defaultOgImage: "/og/default.png",
} as const satisfies SiteMetadata;

export function getLocalizedPath(locale: Locale, path = "/") {
  return getSiteKitLocalizedPath(locale, path);
}
