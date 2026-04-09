'use client'
import React from 'react'
import {
  RiBriefcase4Line,
  RiGraduationCapLine,
} from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const experience = [
  {
    year: 'May 2025 - Present',
    title: 'Software Engineer',
    institution: 'The Natural Sapphire Company',
    type: 'Full-time',
    current: true,
  },
  {
    year: 'Jul 2024 - Apr 2025',
    title: 'Software Engineer',
    institution: 'Adlux Software (Pvt) Ltd',
    type: 'Full-time',
  },
  {
    year: 'Jan 2024 - Jun 2024',
    title: 'Associate Software Engineer',
    institution: 'Adlux Software (Pvt) Ltd',
    type: 'Full-time',
  },
  {
    year: 'Jan 2021 - Jan 2022',
    title: 'Intern',
    institution: "People's Bank, Sri Lanka",
    type: 'Internship',
  },
]

const education = [
  {
    year: '2021 - 2025',
    title: 'BEng (Hons) Software Engineering',
    institution: 'University of Staffordshire',
    type: "Bachelor's degree",
  },
  {
    year: '2021 - 2025',
    title: "Bachelor's Physics",
    institution: 'University of Peradeniya, Sri Lanka',
    type: "Bachelor's degree",
  },
  {
    year: '2017 - 2020',
    title: 'G.C.E Advanced Level (Science Stream)',
    institution: "S. Thomas' College, Bandarawela",
    type: 'Secondary',
  },
]

const TimelineItem = ({ year, title, institution, type, current, isLast }) => (
  <li className="relative flex gap-4">
    {/* Marker column */}
    <div className="flex flex-col items-center">
      <span
        className={`relative mt-1.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full ${
          current
            ? 'bg-emerald-500 ring-4 ring-emerald-100'
            : 'border-2 border-chat-borderStrong bg-white'
        }`}
      >
        {current && (
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60" />
        )}
      </span>
      {!isLast && (
        <span className="mt-1 w-px flex-1 bg-chat-border" aria-hidden="true" />
      )}
    </div>

    {/* Content */}
    <div className="-mx-2 flex-1 rounded-xl px-2 pb-5 pt-0 transition-colors hover:bg-chat-panel">
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-chat-muted">
          {year}
        </span>
        {current && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Current
          </span>
        )}
      </div>
      <h4 className="text-[15px] font-bold text-chat-ink">{title}</h4>
      <p className="text-[13px] text-chat-subtle">{institution}</p>
      {type && (
        <span className="mt-1.5 inline-flex rounded-md bg-chat-panel px-2 py-0.5 text-[11px] font-medium text-chat-subtle">
          {type}
        </span>
      )}
    </div>
  </li>
)

const Column = ({ icon: Icon, title, count, items }) => (
  <div className="rounded-2xl border border-chat-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card">
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-chat-ink text-white">
          <Icon size={18} />
        </span>
        <h3 className="text-[15px] font-bold text-chat-ink">{title}</h3>
      </div>
      <span className="rounded-full bg-chat-panel px-2.5 py-1 text-[11px] font-semibold text-chat-subtle">
        {count}
      </span>
    </div>
    <ul className="flex flex-col">
      {items.map((item, idx) => (
        <TimelineItem
          key={idx}
          {...item}
          isLast={idx === items.length - 1}
        />
      ))}
    </ul>
  </div>
)

const ResumeSection = () => {
  return (
    <>
      <ChatMessage variant="user" id="experience">
        <p>Tell me about your experience and education.</p>
      </ChatMessage>

      <ChatMessage variant="assistant">
        <div className="flex flex-col gap-4">
          <p className="text-chat-ink/80">
            Sure — here&apos;s a snapshot of my career and academic path so far:
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Column
              icon={RiBriefcase4Line}
              title="Experience"
              count={`${experience.length} roles`}
              items={experience}
            />
            <Column
              icon={RiGraduationCapLine}
              title="Education"
              count={`${education.length} degrees`}
              items={education}
            />
          </div>
        </div>
      </ChatMessage>
    </>
  )
}

export default ResumeSection
