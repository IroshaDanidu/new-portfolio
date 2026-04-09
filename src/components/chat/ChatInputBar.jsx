'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RiAddLine, RiMicLine, RiEqualizerLine } from '@remixicon/react'

/**
 * Reusable chat-style input bar.
 * Used in HomeScreen (centered) and at the bottom of conversation pages (sticky).
 */
const ChatInputBar = ({ size = 'md', showDisclaimer = true }) => {
  const router = useRouter()
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const q = value.trim().toLowerCase()
    if (!q) {
      router.push('/contact')
      return
    }
    if (q.includes('project') || q.includes('work')) router.push('/works')
    else if (q.includes('service') || q.includes('skill') || q.includes('tech'))
      router.push('/services')
    else if (q.includes('about') || q.includes('who') || q.includes('experience'))
      router.push('/about')
    else router.push('/contact')
    setValue('')
  }

  const padding = size === 'lg' ? 'px-3 py-2' : 'px-3 py-2'

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex items-center gap-2 rounded-[28px] border border-chat-border bg-white ${padding} shadow-[0_2px_12px_rgba(0,0,0,0.06)]`}
      >
        <button
          type="button"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-chat-ink hover:bg-chat-sidebarHover"
          aria-label="Add"
        >
          <RiAddLine size={20} />
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask anything"
          className="min-w-0 flex-1 bg-transparent px-1 py-2 text-[15px] text-chat-ink outline-none placeholder:text-chat-muted"
        />
        <button
          type="button"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-chat-ink hover:bg-chat-sidebarHover"
          aria-label="Voice"
        >
          <RiMicLine size={18} />
        </button>
        <button
          type="submit"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-black text-white hover:bg-chat-ink"
          aria-label="Send"
        >
          <RiEqualizerLine size={18} />
        </button>
      </div>
      {showDisclaimer && (
        <p className="mt-2 text-center text-[12px] text-chat-muted">
          Replies are typically within a few hours.
        </p>
      )}
    </form>
  )
}

export default ChatInputBar
