import type { Locale } from "../i18n/config";
import { getLocalizedPath } from "./site";

export function getNavigation(locale: Locale) {
  const basePath = getLocalizedPath(locale);

  return {
    primary: [
      { key: "concept", href: `${basePath}#concept` },
      { key: "styles", href: `${basePath}#styles` },
      { key: "services", href: `${basePath}#services` },
      { key: "pricing", href: `${basePath}#pricing` },
    ],
    secondary: [
      { key: "process", href: `${basePath}#process` },
      { key: "contact", href: `${basePath}#contact-details` },
    ],
  } as const;
}
