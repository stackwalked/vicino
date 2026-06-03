import { createSitemapXml } from "@vicino/site-kit";
import { localeConfig } from "../i18n/config";
import { site } from "../data/site";

export function GET() {
  const body = createSitemapXml({
    site,
    localeConfig,
    pages: [
      {
        path: "/",
        changefreq: "weekly",
        priority: 1,
      },
    ],
  });

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
