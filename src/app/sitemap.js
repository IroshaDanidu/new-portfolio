export default function sitemap() {
  const baseUrl = 'https://irosharajapaksha.com';
  const currentDate = new Date();
  const lastWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  // Main pages
  const pages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMonth,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/single-project`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.6,
    }
  ];

  // Add project-specific URLs (if you want individual project pages)
  const projectUrls = [
    'club-camera-lk',
    'drone-mudiyanse',
    'drone-footage',
    'ai-compound-platform',
    'ai-compound-mobile',
    'ai-compound-uk',
    'caleber',
    'stockel-village',
    'urbanink',
    'sapphire-company',
    'fotopidia',
    'sapphireworkx',
    'slumberland-bd-world',
    'carrosseriedimacar'
  ].map(slug => ({
    url: `${baseUrl}/project/${slug}`,
    lastModified: lastWeek,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // Add service-specific URLs
  const serviceUrls = [
    'react-development',
    'laravel-development',
    'ai-solutions',
    'e-commerce-development',
    'mobile-app-development',
    'aws-services'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: lastMonth,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...pages, ...projectUrls, ...serviceUrls];
}