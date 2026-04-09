'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  RiEditBoxLine,
  RiSearchLine,
  RiImageLine,
  RiAppsLine,
  RiCompass3Line,
  RiBox3Line,
  RiSidebarUnfoldLine,
} from '@remixicon/react'

const BrandMark = ({ size = 26 }) => (
  <span
    className="flex items-center justify-center rounded-lg bg-chat-ink font-bold text-white"
    style={{ width: size, height: size, fontSize: Math.round(size * 0.5) }}
    aria-hidden="true"
  >
    IR
  </span>
)

const TOP_NAV = [
  { id: 'home', label: 'Home page', icon: RiEditBoxLine, href: '/' },
  { id: 'about', label: 'About Irosha', icon: RiSearchLine, href: '/about' },
  { id: 'companies', label: 'Companies I worked with', icon: RiImageLine, href: '/about' },
  { id: 'projects', label: 'Projects', icon: RiAppsLine, href: '/works' },
  { id: 'blogs', label: 'Blogs', icon: RiCompass3Line, href: '/about' },
]

const SPECIALTIES = [
  { id: 'fs', label: 'Full-Stack Developer', tone: 'from-violet-400 to-violet-600' },
  { id: 'mob', label: 'Mobile Developer', tone: 'from-sky-400 to-sky-600' },
]

const RECENTS = [
  { id: 'about', label: 'About Irosha', href: '/about' },
  { id: 'works', label: 'Works & Projects', href: '/works' },
  { id: 'tech', label: 'Tech stack & tools', href: '/services' },
  { id: 'exp', label: 'Experience timeline', href: '/about' },
  { id: 'edu', label: 'Education background', href: '/about' },
  { id: 'contact', label: 'Get in touch', href: '/contact' },
  { id: 'partners', label: 'Companies worked with', href: '/' },
  { id: 'cv', label: 'Download CV', href: '/contact' },
]

const Sidebar = ({ open, onClose, desktopCollapsed = false }) => {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen w-[260px] flex-col border-r border-chat-border bg-chat-sidebar transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } ${desktopCollapsed ? 'lg:-translate-x-full' : 'lg:translate-x-0'}`}
      >
        {/* Header: brand + collapse */}
        <div className="flex items-center justify-between px-3 pt-3">
          <Link
            href="/"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-chat-ink hover:bg-chat-sidebarHover"
            aria-label="Home"
          >
            <BrandMark size={24} />
          </Link>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-chat-ink hover:bg-chat-sidebarHover"
            aria-label="Toggle sidebar"
          >
            <RiSidebarUnfoldLine size={20} />
          </button>
        </div>

        {/* Scrollable nav */}
        <nav className="flex-1 overflow-y-auto px-2 pt-3 scrollbar-minimal">
          {/* Top nav */}
          <ul className="flex flex-col">
            {TOP_NAV.map(({ id, label, icon: Icon, href }) => {
              const active = pathname === href && id === 'home'
              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`flex h-9 items-center gap-3 rounded-lg px-2 text-[14px] font-normal text-chat-ink transition-colors hover:bg-chat-sidebarHover ${
                      active ? 'bg-chat-sidebarHover' : ''
                    }`}
                  >
                    <Icon size={18} className="text-chat-ink" />
                    <span className="truncate">{label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Specialties */}
          <div className="px-2 pb-1 pt-5 text-[12px] font-normal text-chat-muted">
            Specialties
          </div>
          <ul className="flex flex-col">
            {SPECIALTIES.map(({ id, label, tone }) => (
              <li key={id}>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="flex h-9 items-center gap-3 rounded-lg px-2 text-[14px] font-normal text-chat-ink transition-colors hover:bg-chat-sidebarHover"
                >
                  <span
                    className={`flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gradient-to-br ${tone} text-[10px] font-bold text-white`}
                  >
                    {label[0]}
                  </span>
                  <span className="truncate">{label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/works"
                onClick={onClose}
                className="flex h-9 items-center gap-3 rounded-lg px-2 text-[14px] font-normal text-chat-ink transition-colors hover:bg-chat-sidebarHover"
              >
                <RiBox3Line size={18} className="text-chat-ink" />
                <span>Explore all</span>
              </Link>
            </li>
          </ul>

          {/* Recents */}
          <div className="px-2 pb-1 pt-5 text-[12px] font-normal text-chat-muted">
            Recents
          </div>
          <ul className="flex flex-col">
            {RECENTS.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="flex h-9 items-center rounded-lg px-2 text-[14px] font-normal text-chat-ink transition-colors hover:bg-chat-sidebarHover"
                >
                  <span className="truncate">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile */}
        <div className="px-2 pb-3 pt-2">
          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-chat-sidebarHover"
          >
            <img
              src="/images/about/profile.png"
              alt="Irosha Rajapaksha"
              className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
            />
            <span className="flex min-w-0 flex-1 flex-col leading-tight">
              <span className="truncate text-[14px] text-chat-ink">
                irosha rajapaksha
              </span>
              <span className="text-[11px] text-chat-muted">Pro</span>
            </span>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
