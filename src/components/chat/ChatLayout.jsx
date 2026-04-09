'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
  RiSidebarFoldLine,
  RiArrowDownSLine,
  RiGift2Line,
  RiCloseLine,
  RiSmartphoneLine,
  RiUpload2Line,
  RiMore2Fill,
} from '@remixicon/react'
import Sidebar from './Sidebar'

const ChatLayout = ({ title = 'Irosha', children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [offerOpen, setOfferOpen] = useState(true)

  return (
    <div className="h-screen overflow-hidden bg-chat-bg text-chat-ink">
      <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main */}
      <main className="flex h-screen w-full flex-col lg:pl-[260px]">
        {/* Top bar */}
        <header className="z-20 flex w-full flex-shrink-0 items-center justify-between gap-2 bg-chat-bg py-3 pl-3 pr-0">
          {/* Left cluster */}
          <div className="flex items-center gap-1">
            {/* Sidebar toggle — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-chat-ink hover:bg-chat-sidebarHover lg:hidden"
              aria-label="Open sidebar"
            >
              <RiSidebarFoldLine size={20} />
            </button>

            {/* Model selector */}
            <button
              type="button"
              className="flex items-center gap-0.5 rounded-lg px-2 py-1.5 text-[18px] font-semibold text-chat-ink hover:bg-chat-sidebarHover"
            >
              {title}
              <RiArrowDownSLine size={20} className="text-chat-muted" />
            </button>
          </div>

          {/* Center: Free offer pill */}
          {offerOpen && (
            <div className="hidden items-center gap-1 rounded-full bg-chat-offerBg px-3 py-1.5 text-[13px] font-medium text-chat-offerInk sm:inline-flex">
              <RiGift2Line size={15} />
              Free offer
              <button
                type="button"
                onClick={() => setOfferOpen(false)}
                className="ml-1 flex h-4 w-4 items-center justify-center rounded-full text-chat-offerInk/70 hover:text-chat-offerInk"
                aria-label="Dismiss offer"
              >
                <RiCloseLine size={14} />
              </button>
            </div>
          )}

          {/* Right cluster */}
          <div className="flex items-center">
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] font-normal text-chat-ink hover:bg-chat-sidebarHover sm:inline-flex"
            >
              <RiSmartphoneLine size={15} />
              Memory full
            </button>
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] font-normal text-chat-ink hover:bg-chat-sidebarHover sm:inline-flex"
            >
              <RiUpload2Line size={15} />
              Share
            </button>
            <button
              type="button"
              className="flex h-9 items-center justify-center rounded-lg px-1.5 text-chat-ink hover:bg-chat-sidebarHover"
              aria-label="More"
            >
              <RiMore2Fill size={18} />
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="relative flex-1 overflow-y-auto scrollbar-minimal">
          {children}
        </div>
      </main>
    </div>
  )
}

export default ChatLayout
