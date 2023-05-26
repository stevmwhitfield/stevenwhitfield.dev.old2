import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://stevenwhitfield.dev",
      lastModified: new Date(),
    },
    {
      url: "https://stevenwhitfield.dev/projects",
      lastModified: new Date(),
    },
    {
      url: "https://stevenwhitfield.dev/contact",
      lastModified: new Date(),
    },
  ];
}
