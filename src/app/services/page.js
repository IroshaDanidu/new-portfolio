import React from 'react'
// import Pricing from '@/components/sections/pricing'
import ServiceGrid from '@/components/sections/serviceGrid'

export const metadata = {
  title: "Web Development Services - Irosha Rajapaksha | Full Stack & AI Solutions",
  description: "Professional web development services by Irosha Rajapaksha. Specializing in React, Laravel, AWS, AI solutions, e-commerce development, mobile apps, and custom web applications. Get expert full stack development services.",
  keywords: "Web Development Services, Full Stack Development, React Development Services, Laravel Development, AI Solutions, E-commerce Development, Mobile App Development, AWS Services, Custom Web Applications, Professional Web Developer",
  openGraph: {
    title: "Web Development Services - Irosha Rajapaksha | Full Stack & AI Solutions",
    description: "Professional web development services specializing in React, Laravel, AWS, AI solutions, e-commerce development, and mobile apps.",
    url: "https://irosharajapaksha.com/services",
    type: "website"
  },
  alternates: {
    canonical: "https://irosharajapaksha.com/services"
  }
};

const Service = () => {
    return (
        <>
            <ServiceGrid />
            {/* <Pricing /> */}
        </>
    )
}

export default Service