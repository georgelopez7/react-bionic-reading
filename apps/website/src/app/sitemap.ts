import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const HOST = process.env.NEXT_PUBLIC_HOST!;
  return [
    {
      url: `${HOST}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}