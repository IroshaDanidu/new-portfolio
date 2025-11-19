export default function manifest() {
  return {
    name: 'Irosha Rajapaksha - Full Stack Developer & AI Engineer',
    short_name: 'Irosha Rajapaksha',
    description: 'Professional Full Stack Developer & AI Engineer specializing in React, Laravel, AWS, and cutting-edge AI solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    dir: 'ltr',
    categories: ['business', 'portfolio', 'technology'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    screenshots: [
      {
        src: '/screenshots/desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Irosha Rajapaksha Portfolio Desktop View'
      },
      {
        src: '/screenshots/mobile.png',
        sizes: '375x667',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Irosha Rajapaksha Portfolio Mobile View'
      }
    ],
    shortcuts: [
      {
        name: 'Portfolio',
        short_name: 'Works',
        description: 'View my development projects',
        url: '/works',
        icons: [{ src: '/icons/portfolio-icon.png', sizes: '96x96' }]
      },
      {
        name: 'Services',
        short_name: 'Services',
        description: 'Web development services',
        url: '/services',
        icons: [{ src: '/icons/services-icon.png', sizes: '96x96' }]
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch',
        url: '/contact',
        icons: [{ src: '/icons/contact-icon.png', sizes: '96x96' }]
      }
    ],
    related_applications: [],
    prefer_related_applications: false
  }
}