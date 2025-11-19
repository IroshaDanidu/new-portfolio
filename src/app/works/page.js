import React from 'react'
import Portfolio from '../../components/sections/portfolio'

export const metadata = {
  title: "Portfolio & Projects - Irosha Rajapaksha | Full Stack Development Work",
  description: "Explore Irosha Rajapaksha's portfolio of full stack development projects including React applications, Laravel websites, e-commerce platforms, AI solutions, and mobile apps. See real-world examples of professional web development work.",
  keywords: "Irosha Rajapaksha Portfolio, Full Stack Projects, React Projects, Laravel Websites, E-commerce Development, AI Projects, Mobile App Development, Web Development Portfolio, Programming Projects",
  openGraph: {
    title: "Portfolio & Projects - Irosha Rajapaksha | Full Stack Development Work",
    description: "Explore professional full stack development projects including React applications, Laravel websites, e-commerce platforms, and AI solutions.",
    url: "https://irosharajapaksha.com/works",
    type: "website"
  },
  alternates: {
    canonical: "https://irosharajapaksha.com/works"
  }
};

const Works = () => {
    return (
        <>
            <Portfolio className={"innerpage-single-area"} />
        </>
    )
}

export default Works