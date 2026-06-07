import { MetadataRoute } from "next";
import { scenarios } from "@/lib/scenarios";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/example", "/for-people", "/for-business", "/for-lawyers", "/scenarios", ...scenarios.map((scenario) => `/scenarios/${scenario.slug}`), "/privacy", "/terms", "/consent", "/limitations"];
  return paths.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : ["/example", "/for-people", "/for-business", "/for-lawyers", "/scenarios"].includes(path) ? 0.8 : path.startsWith("/scenarios/") ? 0.7 : 0.6 }));
}
