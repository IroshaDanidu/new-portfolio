'use client'
import React from 'react'
import Link from 'next/link'
import {
  RiMailSendLine,
  RiUser3Line,
  RiHeartFill,
  RiLightbulbFlashLine,
  RiTeamLine,
} from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const traits = [
  {
    icon: RiLightbulbFlashLine,
    title: 'Curious',
    description:
      'Always learning new tools and patterns to ship better software.',
  },
  {
    icon: RiHeartFill,
    title: 'Detail-oriented',
    description: 'Care deeply about clean code, performance and UX polish.',
  },
  {
    icon: RiTeamLine,
    title: 'Team player',
    description: 'Comfortable across the stack and across the org chart.',
  },
]

const AboutSection = () => {
  return (
    <>
      <ChatMessage variant="user" id="about-detail">
        <p>Can you tell me more about yourself?</p>
      </ChatMessage>

      <ChatMessage variant="assistant">
        <div className="rounded-2xl border border-chat-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card sm:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-chat-ink text-white">
                <RiUser3Line size={18} />
              </span>
              <div className="flex flex-col leading-tight">
                <h3 className="text-[15px] font-bold text-chat-ink">
                  About me
                </h3>
                <span className="text-[12px] text-chat-subtle">
                  A bit more about who I am
                </span>
              </div>
            </div>
          </div>

          {/* Top: avatar + intro */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start">
            <img
              src="/images/about/profile.png"
              alt="Irosha Rajapaksha"
              className="h-24 w-24 flex-shrink-0 rounded-2xl border border-chat-border object-cover shadow-soft"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-[18px] font-bold leading-tight text-chat-ink sm:text-[20px]">
                I&apos;m Irosha Rajapaksha — a Software Engineer.
              </h2>
              <p className="text-[13px] leading-relaxed text-chat-subtle">
                Motivated and detail-oriented developer leveraging full-stack
                expertise to build scalable, user-centric applications. Passionate
                about continuous learning and contributing to impactful projects.
              </p>
            </div>
          </div>

          {/* Long bio */}
          <p className="mb-5 text-[13px] leading-relaxed text-chat-ink/80">
            Extensive experience with modern web technologies including Laravel,
            React.js, Vue.js, and React Native. Expertise spans designing
            RESTful APIs and optimising database performance to creating
            responsive interfaces and cross-platform mobile applications.
          </p>

          {/* Traits */}
          <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {traits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-1.5 rounded-xl border border-chat-border bg-chat-panel/50 p-3 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
              >
                <Icon size={16} className="text-chat-ink" />
                <h4 className="text-[12px] font-bold text-chat-ink">
                  {title}
                </h4>
                <p className="text-[11px] leading-relaxed text-chat-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-chat-ink px-4 py-2 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-black"
          >
            Get in touch <RiMailSendLine size={14} />
          </Link>
        </div>
      </ChatMessage>
    </>
  )
}

export default AboutSection
