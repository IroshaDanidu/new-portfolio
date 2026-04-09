'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import ChatInputBar from './ChatInputBar'

const SUGGESTIONS = [
  { label: 'Show me your projects', href: '/works' },
  { label: 'Tell me about yourself', href: '/about' },
  { label: 'What services do you offer?', href: '/services' },
  { label: 'How can I contact you?', href: '/contact' },
]

const HomeScreen = () => {
  const router = useRouter()

  return (
    <div className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center px-4 pb-20">
      <h1 className="mb-6 text-center text-[28px] font-semibold leading-tight text-chat-ink sm:text-[30px]">
        How can I help you today?
      </h1>

      <div className="w-full max-w-3xl">
        <ChatInputBar showDisclaimer={false} />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.href + s.label}
              type="button"
              onClick={() => router.push(s.href)}
              className="rounded-full border border-chat-border bg-white px-4 py-2 text-[13px] font-normal text-chat-ink shadow-soft transition-colors hover:bg-chat-panel"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
