import React from 'react'
import ChatLayout from '@/components/chat/ChatLayout'
import Conversation from '@/components/chat/Conversation'
import ContactSection from '@/components/chat/sections/ContactSection'

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
    <ChatLayout title="Contact">
      <Conversation>
        <ContactSection />
      </Conversation>
    </ChatLayout>
  )
}

export default Contact
