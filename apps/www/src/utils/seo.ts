import { createSeoMetadata } from "@vicino/site-kit";
import { localeConfig, type Locale } from "../i18n/config";
import { site } from "../data/site";

type SeoInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  robots?: string;
};

export function getSeo(input: SeoInput) {
  return createSeoMetadata({
    site,
    localeConfig,
    ...input,
  });
}
