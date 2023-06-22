import { MetadataRoute } from 'next'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${APP_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${APP_URL}/services`,
      lastModified: new Date(),
    },
    {
      url: `${APP_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${APP_URL}/contact`,
      lastModified: new Date(),
    },
  ]
}
