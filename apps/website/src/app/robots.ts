import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const HOST = process.env.NEXT_PUBLIC_HOST!;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${HOST}/sitemap.xml`,
  };
}