'use client'
import React from 'react'

/**
 * Chat-style message.
 * variant="user"      → gray right-aligned pill bubble, no avatar, no label
 * variant="assistant" → plain text on white, no bubble, no avatar, no label
 *
 * The `label` and `avatar` props are accepted (for backward compatibility
 * with the section components) but intentionally not rendered.
 */
const ChatMessage = ({
  variant = 'assistant',
  children,
  className = '',
  id,
}) => {
  const isUser = variant === 'user'

  if (isUser) {
    return (
      <section
        id={id}
        className={`flex w-full animate-fade-in-up justify-end ${className}`}
      >
        <div className="max-w-[85%] rounded-3xl bg-[#f4f4f4] px-5 py-3 text-[15px] leading-relaxed text-chat-ink">
          {children}
        </div>
      </section>
    )
  }

  return (
    <section
      id={id}
      className={`w-full animate-fade-in-up text-[15px] leading-relaxed text-chat-ink ${className}`}
    >
      {children}
    </section>
  )
}

export default ChatMessage
