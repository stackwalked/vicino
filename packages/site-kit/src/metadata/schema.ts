import type { SiteMetadata } from "../seo/types";

export type OrganizationSchemaInput = {
  site: SiteMetadata;
  description?: string;
  logoPath?: string;
  sameAs?: string[];
};

export type WebsiteSchemaInput = {
  site: SiteMetadata;
  description?: string;
  inLanguage?: string;
};

export function createOrganizationSchema({
  site,
  description,
  logoPath,
  sameAs = [],
}: OrganizationSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.origin,
    description,
    logo: logoPath ? new URL(logoPath, site.origin).toString() : undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };
}

export function createWebsiteSchema({
  site,
  description,
  inLanguage,
}: WebsiteSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.origin,
    description,
    inLanguage,
  };
}

export function createProfessionalServiceSchema({
  site,
  description,
  inLanguage,
}: WebsiteSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.origin,
    description,
    inLanguage,
    areaServed: "International",
    serviceType: "Marketing as a Service",
  };
}
