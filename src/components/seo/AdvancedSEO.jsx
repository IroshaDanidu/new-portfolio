"use client"
import Head from 'next/head'

export default function AdvancedSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
  jsonLd
}) {
  const baseUrl = 'https://irosharajapaksha.com'
  
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical || baseUrl,
    "mainEntity": {
      "@type": "Person",
      "name": "Irosha Rajapaksha",
      "jobTitle": "Full Stack Developer & AI Engineer"
    }
  }

  const finalJsonLd = jsonLd || defaultJsonLd

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical || baseUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Irosha Rajapaksha Portfolio" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@irosharajapaksha" />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Irosha Rajapaksha" />
      <meta name="copyright" content="© 2024 Irosha Rajapaksha. All rights reserved." />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Geographic */}
      <meta name="geo.region" content="LK" />
      <meta name="geo.country" content="Sri Lanka" />
      <meta name="geo.position" content="7.8731;80.7718" />
      <meta name="ICBM" content="7.8731,80.7718" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalJsonLd) }}
      />
      
      {/* Performance & Security */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  )
}