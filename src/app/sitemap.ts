import type { MetadataRoute } from "next";

const SITE_URL = "https://kaviprasath.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/blogs", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
