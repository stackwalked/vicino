import { defaultLocale, isLocale, type Locale } from "../i18n/config";

export function getLocaleFromUrl(pathname: string): Locale {
  const [, segment] = pathname.split("/");
  return isLocale(segment) ? segment : defaultLocale;
}

export function withoutLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  const [, ...rest] = parts;
  return `/${rest.join("/")}`;
}
