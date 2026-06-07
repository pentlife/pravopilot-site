import { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/example", "/privacy", "/terms", "/consent", "/limitations"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : path === "/example" ? 0.8 : 0.6 }));
}
