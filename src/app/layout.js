import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Irosha Rajapaksha - Full Stack Developer & AI Engineer",
  description: "Professional Full Stack Developer & AI Engineer specializing in React, Next.js, Laravel, AWS, and cutting-edge AI solutions. Expert in building scalable web applications, mobile apps, and e-commerce platforms with 5+ years of experience.",
  keywords: "Irosha Rajapaksha, Full Stack Developer, AI Engineer, React Developer, Laravel Developer, AWS Solutions, Next.js, Vue.js, TypeScript, Mobile App Development, E-commerce Development, Web Development Sri Lanka",
  authors: [{ name: "Irosha Rajapaksha", url: "https://irosharajapaksha.com" }],
  creator: "Irosha Rajapaksha",
  publisher: "Irosha Rajapaksha",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover'
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'light dark',
  category: 'Technology',
  classification: 'Business',
  coverage: 'Worldwide',
  distribution: 'Global',
  rating: 'General',
  revisitAfter: '7 days',
  language: 'en-US',
  geo: {
    region: 'LK',
    placename: 'Sri Lanka',
    position: '7.8731;80.7718'
  },
  alternates: {
    canonical: "https://irosharajapaksha.com",
    languages: {
      'en-US': 'https://irosharajapaksha.com',
      'en': 'https://irosharajapaksha.com'
    }
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://irosharajapaksha.com",
    title: "Irosha Rajapaksha - Full Stack Developer & AI Engineer",
    description: "Professional Full Stack Developer & AI Engineer specializing in React, Next.js, Laravel, AWS, and cutting-edge AI solutions. Expert in building scalable web applications, mobile apps, and e-commerce platforms.",
    siteName: "Irosha Rajapaksha Portfolio",
    firstName: "Irosha",
    lastName: "Rajapaksha",
    username: "irosharajapaksha",
    gender: "male",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Irosha Rajapaksha - Full Stack Developer & AI Engineer",
        type: "image/jpeg"
      },
      {
        url: "/images/og-square.jpg",
        width: 400,
        height: 400,
        alt: "Irosha Rajapaksha Profile Photo",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@irosharajapaksha",
    creator: "@irosharajapaksha",
    title: "Irosha Rajapaksha - Full Stack Developer & AI Engineer",
    description: "Professional Full Stack Developer & AI Engineer specializing in React, Next.js, Laravel, AWS, and AI solutions.",
    images: [
      {
        url: "/images/twitter-card.jpg",
        alt: "Irosha Rajapaksha - Full Stack Developer & AI Engineer"
      }
    ]
  },
  facebook: {
    appId: "your-facebook-app-id"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "alexaVerifyID": "your-alexa-verification-code",
      "p:domain_verify": "your-pinterest-verification-code",
      "yandex-verification": "your-yandex-verification-code"
    }
  },
  appleWebApp: {
    capable: true,
    title: "Irosha Rajapaksha Portfolio",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/images/apple-startup.png"
    ]
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=yes, date=yes, address=yes, email=yes, url=yes',
    'HandheldFriendly': 'true',
    'MobileOptimized': '320',
    'target': '_top',
    'theme-color': '#000000',
    'msapplication-navbutton-color': '#000000',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-starturl': '/',
    'viewport-fit': 'cover',
    'mobile-web-app-title': 'Irosha Rajapaksha',
    'application-name': 'Irosha Rajapaksha Portfolio',
    'msapplication-tooltip': 'Full Stack Developer & AI Engineer',
    'msapplication-description': 'Professional Full Stack Developer & AI Engineer',
    'msapplication-task': 'name=Portfolio;action-uri=/works;icon-uri=/favicon.ico',
    'msapplication-task-separator': ';',
    'Cache-Control': 'public, max-age=31536000, immutable'
  }
};

export default function RootLayout({ children }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://irosharajapaksha.com/#person",
      "name": "Irosha Rajapaksha",
      "givenName": "Irosha",
      "familyName": "Rajapaksha",
      "jobTitle": "Full Stack Developer & AI Engineer",
      "description": "Professional Full Stack Developer & AI Engineer specializing in React, Next.js, Laravel, AWS, and cutting-edge AI solutions.",
      "url": "https://irosharajapaksha.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://irosharajapaksha.com/images/profile.jpg",
        "width": 400,
        "height": 400
      },
      "sameAs": [
        "https://linkedin.com/in/irosharajapaksha",
        "https://github.com/irosharajapaksha",
        "https://twitter.com/irosharajapaksha"
      ],
      "knowsAbout": [
        "React.js", "Next.js", "Laravel", "PHP", "Vue.js", "JavaScript", "TypeScript", 
        "Node.js", "AWS", "Docker", "MySQL", "Redis", "Tailwind CSS", "Mobile App Development",
        "E-commerce Development", "AI Solutions", "Full Stack Development"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance Developer",
        "url": "https://irosharajapaksha.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "LK",
        "addressRegion": "Sri Lanka"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationLocation": {
          "@type": "Country",
          "name": "Sri Lanka"
        },
        "skills": [
          "React Development", "Laravel Development", "AWS Solutions", "AI Engineering",
          "Mobile App Development", "E-commerce Development", "Web Development"
        ]
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "professional",
        "email": "contact@irosharajapaksha.com",
        "url": "https://irosharajapaksha.com/contact"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://irosharajapaksha.com/#website",
      "url": "https://irosharajapaksha.com",
      "name": "Irosha Rajapaksha Portfolio",
      "description": "Professional portfolio of Irosha Rajapaksha - Full Stack Developer & AI Engineer",
      "publisher": {
        "@id": "https://irosharajapaksha.com/#person"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://irosharajapaksha.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://irosharajapaksha.com/#service",
      "name": "Full Stack Development Services",
      "description": "Professional web development services including React, Laravel, AWS, AI solutions, and e-commerce development",
      "provider": {
        "@id": "https://irosharajapaksha.com/#person"
      },
      "serviceType": "Web Development",
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Development",
              "description": "Professional React.js and Next.js development services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Laravel Development",
              "description": "Custom Laravel web application development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Artificial Intelligence and machine learning integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Development",
              "description": "Custom e-commerce platform development"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://irosharajapaksha.com/#organization",
      "name": "Irosha Rajapaksha Portfolio",
      "url": "https://irosharajapaksha.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://irosharajapaksha.com/images/logo.png"
      },
      "founder": {
        "@id": "https://irosharajapaksha.com/#person"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@irosharajapaksha.com",
        "url": "https://irosharajapaksha.com/contact"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
