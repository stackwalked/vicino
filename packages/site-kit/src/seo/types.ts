export type SeoAlternate<Locale extends string = string> = {
  locale: Locale;
  href: string;
};

export type SeoMetadata<Locale extends string = string> = {
  title: string;
  description: string;
  canonical: string;
  imageUrl?: string;
  alternates: SeoAlternate<Locale>[];
  xDefault: string;
  robots?: string;
};

export type SiteMetadata = {
  name: string;
  origin: string;
  defaultOgImage?: string;
};
