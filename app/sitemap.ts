import { APP_URL } from '@/lib/constants'
import { MetadataRoute } from 'next'

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
