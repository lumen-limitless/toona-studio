import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://toona.studio',
      lastModified: new Date(),
    },
    {
      url: 'https://toona.studio/services',
      lastModified: new Date(),
    },
    {
      url: 'https://toona.studio/about',
      lastModified: new Date(),
    },
    {
      url: 'https://toona.studio/contact',
      lastModified: new Date(),
    },
  ]
}
