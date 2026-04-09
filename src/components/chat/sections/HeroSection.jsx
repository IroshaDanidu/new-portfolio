'use client'
import React from 'react'
import Link from 'next/link'
import {
  RiLinkedinFill,
  RiGithubLine,
  RiMapPinLine,
  RiMailSendLine,
  RiBriefcase4Line,
  RiCodeSSlashLine,
  RiStackLine,
} from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const stats = [
  { icon: RiBriefcase4Line, value: '5+', label: 'Years experience' },
  { icon: RiCodeSSlashLine, value: '17+', label: 'Projects shipped' },
  { icon: RiStackLine, value: '22+', label: 'Technologies' },
]

const HeroSection = () => {
  return (
    <>
      <ChatMessage variant="user" id="about">
        <p>Hi 👋 — who are you and what do you do?</p>
      </ChatMessage>

      <ChatMessage variant="assistant">
        <div className="overflow-hidden rounded-2xl border border-chat-border bg-white shadow-soft transition-shadow hover:shadow-card">
          {/* Top: avatar band */}
          <div className="relative bg-gradient-to-br from-chat-panel via-white to-chat-panel px-6 pb-6 pt-6">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="relative">
                <img
                  src="/images/about/profile.png"
                  alt="Irosha Rajapaksha"
                  className="h-24 w-24 rounded-2xl border border-chat-border object-cover shadow-card sm:h-28 sm:w-28"
                />
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                  <span className="h-2 w-2 animate-ping rounded-full bg-white" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Available for work
                </div>
                <h2 className="text-[22px] font-bold leading-tight text-chat-ink sm:text-[26px]">
                  Hi, I&apos;m{' '}
                  <span className="bg-gradient-to-r from-chat-ink to-chat-subtle bg-clip-text text-transparent">
                    Irosha Rajapaksha
                  </span>
                </h2>
                <p className="text-[14px] text-chat-subtle">
                  Full-stack Software Engineer
                </p>
                <p className="inline-flex items-center gap-1.5 text-[12px] text-chat-muted">
                  <RiMapPinLine size={13} /> Bandarawela, Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="border-t border-chat-border px-6 py-5">
            <p className="text-[14px] leading-relaxed text-chat-ink/85">
              I build scalable, user-centric web and mobile applications across
              the full stack — from RESTful APIs and database design to polished
              React, Next.js and React Native interfaces. Passionate about clean
              code, thoughtful UX, and shipping work that matters.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 border-t border-chat-border">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 border-r border-chat-border px-3 py-4 text-center last:border-r-0"
              >
                <Icon size={18} className="text-chat-subtle" />
                <span className="text-[18px] font-bold text-chat-ink">
                  {value}
                </span>
                <span className="text-[11px] text-chat-muted">{label}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2 border-t border-chat-border bg-chat-panel/50 px-6 py-4">
            <Link
              href="mailto:iro7899rajapaksha@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-chat-ink px-4 py-2 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              Let&apos;s Talk <RiMailSendLine size={14} />
            </Link>
            <Link
              href="https://linkedin.com/in/irosha-rajapaksha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-chat-border bg-white text-chat-ink transition-colors hover:bg-chat-sidebarHover"
              aria-label="LinkedIn"
            >
              <RiLinkedinFill size={16} />
            </Link>
            <Link
              href="https://github.com/iroshaDanidu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-chat-border bg-white text-chat-ink transition-colors hover:bg-chat-sidebarHover"
              aria-label="GitHub"
            >
              <RiGithubLine size={16} />
            </Link>
          </div>
        </div>
      </ChatMessage>
    </>
  )
}

export default HeroSection
