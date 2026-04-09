'use client'
import React from 'react'
import Link from 'next/link'
import {
  RiArrowRightLine,
  RiSparklingFill,
  RiMailSendLine,
} from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const CallToActionSection = () => {
  return (
    <ChatMessage variant="assistant">
      <div className="relative overflow-hidden rounded-2xl border border-chat-border bg-gradient-to-br from-chat-ink via-[#1a1a1a] to-[#0a0a0a] p-6 text-white shadow-card sm:p-8">
        {/* Decorative background blobs */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
              <RiSparklingFill size={12} className="text-amber-300" />
              Open for new projects
            </div>
            <h3 className="text-[20px] font-bold leading-tight sm:text-[24px]">
              Ready to kickstart your project
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-violet-300 to-emerald-300 bg-clip-text text-transparent">
                with a touch of magic?
              </span>
            </h3>
            <p className="max-w-md text-[13px] leading-relaxed text-white/70">
              Reach out and let&apos;s make it happen. Available for full-time
              and part-time opportunities.
            </p>
          </div>

          <div className="flex flex-shrink-0 flex-col gap-2 sm:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-chat-ink transition-all hover:-translate-y-0.5 hover:bg-chat-panel"
            >
              Let&apos;s Talk <RiArrowRightLine size={14} />
            </Link>
            <Link
              href="mailto:iro7899rajapaksha@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Send Email <RiMailSendLine size={14} />
            </Link>
          </div>
        </div>
      </div>
    </ChatMessage>
  )
}

export default CallToActionSection
