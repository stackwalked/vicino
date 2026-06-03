import { createRobotsTxt } from "@vicino/site-kit";
import { site } from "../data/site";

export function GET() {
  return new Response(createRobotsTxt({ site }), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
