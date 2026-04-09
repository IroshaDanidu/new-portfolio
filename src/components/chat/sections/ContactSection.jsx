'use client'
import React from 'react'
import Link from 'next/link'
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiDownloadLine,
  RiSendPlaneLine,
  RiChat3Line,
  RiTimeLine,
} from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const channels = [
  {
    icon: RiMailLine,
    label: 'Email',
    value: 'iro7899rajapaksha@gmail.com',
    href: 'mailto:iro7899rajapaksha@gmail.com',
    accent: 'from-violet-500 to-violet-700',
  },
  {
    icon: RiPhoneLine,
    label: 'Mobile',
    value: '+94 77 68 40 032',
    href: 'tel:+94776840032',
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: RiMapPinLine,
    label: 'Location',
    value: 'Bandarawela, Sri Lanka',
    accent: 'from-sky-500 to-sky-700',
  },
]

const ContactSection = () => {
  return (
    <>
      <ChatMessage variant="user" id="contact">
        <p>How can I get in touch with you?</p>
      </ChatMessage>

      <ChatMessage variant="assistant">
        <div className="rounded-2xl border border-chat-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card sm:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-chat-ink text-white">
                <RiChat3Line size={18} />
              </span>
              <div className="flex flex-col leading-tight">
                <h3 className="text-[15px] font-bold text-chat-ink">
                  Get in touch
                </h3>
                <span className="text-[12px] text-chat-subtle">
                  Let&apos;s start a conversation
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available
            </span>
          </div>

          {/* Channels */}
          <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {channels.map(({ icon: Icon, label, value, href, accent }) => {
              const inner = (
                <div className="group flex items-start gap-3 rounded-xl border border-chat-border bg-white p-3 transition-all hover:-translate-y-0.5 hover:border-chat-borderStrong hover:shadow-card">
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft ${accent}`}
                  >
                    <Icon size={16} />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-chat-muted">
                      {label}
                    </span>
                    <span className="truncate text-[13px] font-semibold text-chat-ink">
                      {value}
                    </span>
                  </div>
                </div>
              )
              return href ? (
                <Link key={label} href={href}>
                  {inner}
                </Link>
              ) : (
                <div key={label}>{inner}</div>
              )
            })}
          </div>

          {/* Quick info row */}
          <div className="mb-5 flex flex-wrap items-center gap-2 rounded-xl bg-chat-panel/70 px-3 py-2 text-[12px] text-chat-subtle">
            <RiTimeLine size={14} />
            Replies typically within a few hours · Mon–Sat
            <Link
              href="#"
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-chat-border bg-white px-3 py-1 text-[11px] font-semibold text-chat-ink shadow-soft transition-all hover:-translate-y-0.5 hover:bg-chat-sidebarHover"
            >
              <RiDownloadLine size={12} /> Download CV
            </Link>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Full Name" id="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Steve Milner"
                  className="w-full rounded-xl border border-chat-border bg-white px-4 py-2.5 text-[13px] text-chat-ink shadow-soft outline-none transition-all placeholder:text-chat-muted focus:border-chat-ink focus:shadow-card"
                />
              </Field>
              <Field label="Email Address" id="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="hello@websitename.com"
                  className="w-full rounded-xl border border-chat-border bg-white px-4 py-2.5 text-[13px] text-chat-ink shadow-soft outline-none transition-all placeholder:text-chat-muted focus:border-chat-ink focus:shadow-card"
                />
              </Field>
            </div>
            <Field label="Your Message" id="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project…"
                className="w-full resize-none rounded-xl border border-chat-border bg-white px-4 py-2.5 text-[13px] text-chat-ink shadow-soft outline-none transition-all placeholder:text-chat-muted focus:border-chat-ink focus:shadow-card"
              />
            </Field>
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-chat-ink px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-black"
              >
                Send Message <RiSendPlaneLine size={14} />
              </button>
            </div>
          </form>
        </div>
      </ChatMessage>
    </>
  )
}

const Field = ({ label, id, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-[11px] font-semibold uppercase tracking-wider text-chat-muted"
    >
      {label}
    </label>
    {children}
  </div>
)

export default ContactSection
