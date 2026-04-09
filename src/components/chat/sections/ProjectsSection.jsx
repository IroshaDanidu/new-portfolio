'use client'
import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  RiArrowRightUpLine,
  RiFolderOpenLine,
  RiExternalLinkLine,
  RiTeamLine,
  RiShoppingBag3Line,
  RiStore2Line,
  RiRobot2Line,
  RiBriefcase4Line,
  RiDashboardLine,
  RiSmartphoneLine,
  RiUser3Line,
  RiPuzzleLine,
  RiCodeBoxLine,
} from '@remixicon/react'
import ChatMessage from '../ChatMessage'
import { projectsData } from '@/utlits/fackData/projectData'

// Category → icon + gradient palette
const CATEGORY_META = {
  Community: {
    icon: RiTeamLine,
    accent: 'from-violet-500 to-fuchsia-600',
    soft: 'from-violet-50 to-fuchsia-50',
  },
  'E-commerce': {
    icon: RiShoppingBag3Line,
    accent: 'from-emerald-500 to-teal-600',
    soft: 'from-emerald-50 to-teal-50',
  },
  Marketplace: {
    icon: RiStore2Line,
    accent: 'from-sky-500 to-blue-600',
    soft: 'from-sky-50 to-blue-50',
  },
  'AI/Web': {
    icon: RiRobot2Line,
    accent: 'from-indigo-500 to-purple-600',
    soft: 'from-indigo-50 to-purple-50',
  },
  Business: {
    icon: RiBriefcase4Line,
    accent: 'from-amber-500 to-orange-600',
    soft: 'from-amber-50 to-orange-50',
  },
  Management: {
    icon: RiDashboardLine,
    accent: 'from-rose-500 to-pink-600',
    soft: 'from-rose-50 to-pink-50',
  },
  'AI/Mobile': {
    icon: RiSmartphoneLine,
    accent: 'from-cyan-500 to-sky-600',
    soft: 'from-cyan-50 to-sky-50',
  },
  Portfolio: {
    icon: RiUser3Line,
    accent: 'from-slate-600 to-zinc-700',
    soft: 'from-slate-50 to-zinc-50',
  },
  Extensions: {
    icon: RiPuzzleLine,
    accent: 'from-lime-500 to-green-600',
    soft: 'from-lime-50 to-green-50',
  },
}

const FALLBACK = {
  icon: RiCodeBoxLine,
  accent: 'from-chat-ink to-zinc-700',
  soft: 'from-chat-panel to-white',
}

const ProjectsSection = () => {
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => {
    const set = ['All']
    projectsData.forEach((p) => {
      if (!set.includes(p.category)) set.push(p.category)
    })
    return set
  }, [])

  const filtered =
    category === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === category)

  return (
    <>
      <ChatMessage variant="user" id="projects">
        <p>Can I see some of your projects?</p>
      </ChatMessage>

      <ChatMessage variant="assistant">
        <div className="rounded-2xl border border-chat-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card sm:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-chat-ink text-white">
                <RiFolderOpenLine size={18} />
              </span>
              <div className="flex flex-col leading-tight">
                <h3 className="text-[15px] font-bold text-chat-ink">
                  Works &amp; projects
                </h3>
                <span className="text-[12px] text-chat-subtle">
                  Selected real-world work
                </span>
              </div>
            </div>
            <span className="rounded-full bg-chat-panel px-2.5 py-1 text-[11px] font-semibold text-chat-subtle">
              {projectsData.length} projects
            </span>
          </div>

          {/* Filter chips */}
          <div className="mb-5 flex flex-wrap gap-1.5">
            {categories.map((c) => {
              const active = c === category
              const count =
                c === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === c).length
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-all ${
                    active
                      ? 'border-chat-ink bg-chat-ink text-white'
                      : 'border-chat-border bg-white text-chat-subtle hover:border-chat-borderStrong hover:text-chat-ink'
                  }`}
                >
                  {c}
                  <span
                    className={`rounded-full px-1.5 text-[10px] font-bold ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-chat-panel text-chat-muted'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Project list (compact) */}
          <ul className="flex flex-col gap-1.5">
            {filtered.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </ChatMessage>
    </>
  )
}

const ProjectRow = ({ project }) => {
  const { title, category, url } = project
  const meta = CATEGORY_META[category] || FALLBACK
  const Icon = meta.icon
  const hasLink = url && url !== '#'

  // "Name - Tagline" → split on " - "
  const [nameRaw, ...rest] = title.split(' - ')
  const tagline = rest.join(' - ').trim()

  const hostname = hasLink
    ? url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
        .replace(/^www\./, '')
    : 'Private project'

  return (
    <li>
      <Link
        href={url || '/single-project'}
        target={hasLink ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-chat-border bg-white px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-chat-borderStrong hover:shadow-card"
      >
        {/* Icon */}
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-soft ${meta.accent}`}
        >
          <Icon size={18} />
        </div>

        {/* Title + meta */}
        <div className="flex min-w-0 flex-1 flex-col leading-tight">
          <div className="flex items-center gap-2">
            <h4 className="truncate text-[13px] font-bold text-chat-ink">
              {nameRaw}
            </h4>
            <span className="hidden flex-shrink-0 rounded-md bg-chat-panel px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-chat-subtle sm:inline-flex">
              {category}
            </span>
          </div>
          <p className="truncate text-[11px] text-chat-muted">
            {tagline ? `${tagline} · ${hostname}` : hostname}
          </p>
        </div>

        {/* Arrow */}
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all ${
            hasLink
              ? 'bg-chat-panel text-chat-ink group-hover:bg-chat-ink group-hover:text-white'
              : 'bg-chat-panel text-chat-muted'
          }`}
        >
          {hasLink ? (
            <RiExternalLinkLine size={14} />
          ) : (
            <RiArrowRightUpLine size={14} />
          )}
        </span>
      </Link>
    </li>
  )
}

export default ProjectsSection
