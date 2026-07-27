import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kaviprasath.online/sitemap.xml",
    host: "https://kaviprasath.online",
  };
}
