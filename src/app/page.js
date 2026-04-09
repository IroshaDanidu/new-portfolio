import React from 'react'
import ChatLayout from '@/components/chat/ChatLayout'
import Conversation from '@/components/chat/Conversation'
import HeroSection from '@/components/chat/sections/HeroSection'
import ServicesSection from '@/components/chat/sections/ServicesSection'
import TechStackSection from '@/components/chat/sections/TechStackSection'
import ProjectsSection from '@/components/chat/sections/ProjectsSection'
import ResumeSection from '@/components/chat/sections/ResumeSection'
import PartnersSection from '@/components/chat/sections/PartnersSection'
import ContactSection from '@/components/chat/sections/ContactSection'
import CallToActionSection from '@/components/chat/sections/CallToActionSection'

const Home = () => {
  return (
    <ChatLayout title="Irosha">
      <Conversation>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectsSection />
        <ResumeSection />
        <PartnersSection />
        <ContactSection />
        <CallToActionSection />
      </Conversation>
    </ChatLayout>
  )
}

export default Home
