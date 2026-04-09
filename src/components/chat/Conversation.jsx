import React from 'react'

/**
 * Centered conversation column (~768px wide)
 * and bottom padding so the sticky "Memory full" toast doesn't overlap content.
 */
const Conversation = ({ children }) => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 pb-10 pt-6 sm:px-6 sm:pt-8">
      {children}
    </div>
  )
}

export default Conversation
