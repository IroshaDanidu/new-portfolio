'use client'
import React from 'react'
import {
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiDatabaseLine,
  RiCloudLine,
  RiToolsLine,
  RiArrowRightUpLine,
} from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const services = [
  {
    icon: RiCodeSSlashLine,
    title: 'Full-Stack Development',
    description:
      'Expert in Laravel, React.js, Vue.js, and RESTful API development for scalable web applications.',
    tags: ['Laravel', 'React', 'Vue.js', 'REST API'],
    accent: 'from-violet-500 to-violet-700',
  },
  {
    icon: RiSmartphoneLine,
    title: 'Mobile Development',
    description:
      'Building cross-platform mobile apps with React Native and Expo for iOS and Android platforms.',
    tags: ['React Native', 'Expo', 'iOS', 'Android'],
    accent: 'from-sky-500 to-sky-700',
  },
  {
    icon: RiDatabaseLine,
    title: 'Database & Backend',
    description:
      'MySQL optimization, Redis caching, and efficient backend systems with Laravel and PHP.',
    tags: ['MySQL', 'Redis', 'Laravel', 'PHP'],
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: RiCloudLine,
    title: 'Cloud & DevOps',
    description:
      'AWS S3, Docker, Laravel Forge, and Linux server management for scalable deployments.',
    tags: ['AWS', 'Docker', 'Linux', 'Forge'],
    accent: 'from-amber-500 to-amber-700',
  },
]

const ServicesSection = () => {
  return (
    <>
      <ChatMessage variant="user" id="services">
        <p>What kind of services do you offer?</p>
      </ChatMessage>

      <ChatMessage variant="assistant">
        <div className="rounded-2xl border border-chat-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card sm:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-chat-ink text-white">
                <RiToolsLine size={18} />
              </span>
              <div className="flex flex-col leading-tight">
                <h3 className="text-[15px] font-bold text-chat-ink">
                  My expertise
                </h3>
                <span className="text-[12px] text-chat-subtle">
                  4 core areas I specialise in
                </span>
              </div>
            </div>
            <span className="rounded-full bg-chat-panel px-2.5 py-1 text-[11px] font-semibold text-chat-subtle">
              {services.length} services
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, description, tags, accent }) => (
              <div
                key={title}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-chat-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-chat-borderStrong hover:shadow-card"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft ${accent}`}
                  >
                    <Icon size={20} />
                  </div>
                  <RiArrowRightUpLine
                    size={16}
                    className="text-chat-muted opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <h4 className="text-[14px] font-bold text-chat-ink">
                  {title}
                </h4>
                <p className="text-[12px] leading-relaxed text-chat-subtle">
                  {description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-chat-panel px-2 py-0.5 text-[10px] font-medium text-chat-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ChatMessage>
    </>
  )
}

export default ServicesSection
