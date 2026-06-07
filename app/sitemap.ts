import { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/example", "/for-people", "/for-business", "/for-lawyers", "/privacy", "/terms", "/consent", "/limitations"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : ["/example", "/for-people", "/for-business", "/for-lawyers"].includes(path) ? 0.8 : 0.6 }));
}
