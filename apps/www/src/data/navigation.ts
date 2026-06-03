import type { Locale } from "../i18n/config";
import { getLocalizedPath } from "./site";

export function getNavigation(locale: Locale) {
  const basePath = getLocalizedPath(locale);

  return {
    primary: [
      { key: "concept", href: `${basePath}#concept` },
      { key: "styles", href: `${basePath}#styles` },
      { key: "demo", href: `${basePath}#demo` },
    ],
    secondary: [
      { key: "pricing", href: `${basePath}#pricing` },
      { key: "contact", href: `${basePath}#contact` },
    ],
  } as const;
}
