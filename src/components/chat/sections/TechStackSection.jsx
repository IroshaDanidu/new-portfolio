'use client'
import React, { useMemo, useState } from 'react'
import { RiStackLine } from '@remixicon/react'
import ChatMessage from '../ChatMessage'

const TECH = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', group: 'Frontend' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', group: 'Frontend' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', group: 'Frontend' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', group: 'Frontend' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', group: 'Frontend' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', group: 'Frontend' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', group: 'Frontend' },
  { name: 'Tailwind CSS', logo: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg', group: 'Frontend' },
  { name: 'Laravel', logo: 'https://laravel.com/img/logomark.min.svg', group: 'Backend' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', group: 'Backend' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', group: 'Backend' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', group: 'Backend' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', group: 'Backend' },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', group: 'Backend' },
  { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', group: 'Mobile' },
  { name: 'Expo', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', group: 'Mobile' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', group: 'DevOps' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', group: 'DevOps' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', group: 'DevOps' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', group: 'DevOps' },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', group: 'DevOps' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', group: 'DevOps' },
]

const FILTERS = ['All', 'Frontend', 'Backend', 'Mobile', 'DevOps']

const TechStackSection = () => {
  const [filter, setFilter] = useState('All')

  const counts = useMemo(() => {
    const c = { All: TECH.length }
    TECH.forEach((t) => {
      c[t.group] = (c[t.group] || 0) + 1
    })
    return c
  }, [])

  const visible = filter === 'All' ? TECH : TECH.filter((t) => t.group === filter)

  return (
    <>
      <ChatMessage variant="user" id="skills">
        <p>What technologies do you work with?</p>
      </ChatMessage>

      <ChatMessage variant="assistant">
        <div className="rounded-2xl border border-chat-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card sm:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-chat-ink text-white">
                <RiStackLine size={18} />
              </span>
              <div className="flex flex-col leading-tight">
                <h3 className="text-[15px] font-bold text-chat-ink">
                  Tech stack &amp; tools
                </h3>
                <span className="text-[12px] text-chat-subtle">
                  Hover any tool to see its name
                </span>
              </div>
            </div>
            <span className="rounded-full bg-chat-panel px-2.5 py-1 text-[11px] font-semibold text-chat-subtle">
              {TECH.length} tools
            </span>
          </div>

          {/* Filter tabs */}
          <div className="mb-5 flex flex-wrap gap-1.5">
            {FILTERS.map((f) => {
              const active = f === filter
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-all ${
                    active
                      ? 'border-chat-ink bg-chat-ink text-white'
                      : 'border-chat-border bg-white text-chat-subtle hover:border-chat-borderStrong hover:text-chat-ink'
                  }`}
                >
                  {f}
                  <span
                    className={`rounded-full px-1.5 text-[10px] font-bold ${
                      active
                        ? 'bg-white/20 text-white'
                        : 'bg-chat-panel text-chat-muted'
                    }`}
                  >
                    {counts[f] || 0}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Dense icon grid */}
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
            {visible.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-chat-border bg-white p-2 transition-all hover:-translate-y-0.5 hover:border-chat-borderStrong hover:shadow-card"
                title={tech.name}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-7 w-7 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="line-clamp-1 text-[10px] font-medium text-chat-subtle">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ChatMessage>
    </>
  )
}

export default TechStackSection
