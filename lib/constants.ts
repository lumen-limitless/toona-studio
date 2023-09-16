export const LINKEDIN_URL = 'https://www.linkedin.com/company/toona-studio/'
export const INSTAGRAM_URL = 'https://www.instagram.com/toona.studio/'
export const DISCORD_URL = 'https://discord.gg/pbHNpDTCXz'
export const WEBSITE_URL = 'https://christoona.com/'
export const DRIBBBLE_URL = 'https://dribbble.com/christoona'

export const APP_NAME = 'Toona Studio'
export const APP_DESCRIPTION =
  'Toona Studio is a web development and UX/UI design studio based in Rochester, NY.'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
  ? `${process.env.NEXT_PUBLIC_APP_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'
