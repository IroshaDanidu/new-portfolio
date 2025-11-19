import React from 'react'
import ContactOption from '../../components/sections/contact/contactOption'
import ContactForm from '../../components/sections/contact/contactForm'

export const metadata = {
  title: "Contact Irosha Rajapaksha - Full Stack Developer | Get in Touch",
  description: "Contact Irosha Rajapaksha for professional web development services. Get in touch for React, Laravel, AWS, AI solutions, e-commerce development, and custom web applications. Available for freelance projects and consultations.",
  keywords: "Contact Irosha Rajapaksha, Let's Talk Full Stack Developer, Web Development Services, React Developer Contact, Laravel Developer, Freelance Web Developer, Custom Web Applications, Professional Web Development",
  openGraph: {
    title: "Contact Irosha Rajapaksha - Full Stack Developer | Get in Touch",
    description: "Contact Irosha Rajapaksha for professional web development services. Available for React, Laravel, AWS, AI solutions, and custom web applications.",
    url: "https://irosharajapaksha.com/contact",
    type: "website"
  },
  alternates: {
    canonical: "https://irosharajapaksha.com/contact"
  }
};

const Contact = () => {
  return (
    <section id="contact" className="contact-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>contact</p>
                <h2>Get in Touch with Me!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ContactOption />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact