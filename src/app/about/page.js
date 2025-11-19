import React from 'react'
import Summery from '@/components/sections/summery'
// import Resume from '@/components/sections/resume'
// import Testimonials from '@/components/sections/testimonials'

export const metadata = {
  title: "About Irosha Rajapaksha - Full Stack Developer & AI Engineer",
  description: "Learn about Irosha Rajapaksha, a professional Full Stack Developer and AI Engineer with expertise in React, Laravel, AWS, and modern web technologies. Discover my journey, skills, and passion for creating innovative digital solutions.",
  keywords: "About Irosha Rajapaksha, Full Stack Developer Bio, AI Engineer Background, React Expert, Laravel Specialist, Web Developer Sri Lanka, Software Engineer Profile",
  openGraph: {
    title: "About Irosha Rajapaksha - Full Stack Developer & AI Engineer",
    description: "Learn about Irosha Rajapaksha, a professional Full Stack Developer and AI Engineer with expertise in React, Laravel, AWS, and modern web technologies.",
    url: "https://irosharajapaksha.com/about",
    type: "profile"
  },
  alternates: {
    canonical: "https://irosharajapaksha.com/about"
  }
};

const About = () => {
    return (
        <>
            <Summery />
            {/* <Resume /> */}
            {/* <Testimonials /> */}
           
        </>
    )
}

export default About