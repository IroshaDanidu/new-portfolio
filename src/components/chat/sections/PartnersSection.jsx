'use client'
import React from 'react'
import { RiBuilding2Line } from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const partners = [
  { src: '/images/client-logos/company-logo-4.png', alt: 'Technology solutions partnership' },
  { src: '/images/client-logos/logo (1).png', alt: 'Client company logo' },
  { src: '/images/client-logos/logo (2).png', alt: 'Client company logo' },
  { src: '/images/client-logos/dc-logo.png', alt: 'DC' },
  { src: '/images/client-logos/2r0slkRrDlV3fvwTLsoln6KgHBv.svg', alt: 'Camera LK' },
  { src: '/images/client-logos/logo (3).png', alt: 'Client company logo' },
  { src: '/images/client-logos/logo.png', alt: 'Client company logo' },
  { src: '/images/client-logos/sapphire-logo.svg', alt: 'Sapphire' },
  { src: '/images/client-logos/company-logo-2.png', alt: 'Professional business partnership' },
  { src: '/images/client-logos/cbs-logo.svg', alt: 'CBS' },
  { src: '/images/client-logos/Logo+2025+-+Transparent+Background (1).webp', alt: '2025 Logo' },
]

const PartnersSection = () => {
  return (
    <ChatMessage variant="assistant">
      <div className="rounded-2xl border border-chat-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card sm:p-6">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-chat-ink text-white">
              <RiBuilding2Line size={18} />
            </span>
            <div className="flex flex-col leading-tight">
              <h3 className="text-[15px] font-bold text-chat-ink">
                Companies I&apos;ve worked with
              </h3>
              <span className="text-[12px] text-chat-subtle">
                {partners.length}+ trusted collaborations
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to work
          </span>
        </div>

        {/* Static logo grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-xl border border-chat-border bg-white p-3 shadow-soft transition-all hover:-translate-y-0.5 hover:border-chat-borderStrong hover:shadow-card"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </ChatMessage>
  )
}

export default PartnersSection
