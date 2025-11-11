import { MetadataRoute } from "next";

// @note generateSitemap creates sitemap.xml for search engines
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gurotopia.is-a.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
