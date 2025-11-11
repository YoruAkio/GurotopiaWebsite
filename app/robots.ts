import { MetadataRoute } from "next";

// @note generateRobots creates robots.txt for search engine crawlers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"]
    },
    sitemap: "https://gurotopia.is-a.dev/sitemap.xml"
  };
}
