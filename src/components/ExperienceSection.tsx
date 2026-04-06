import { useState } from 'react'
import RevealWrapper from './RevealWrapper'
import SectionHeading from './SectionHeading'
import { experience, formatDuration, formatMonthYear } from '../data/experience'

interface TimelineEntryProps {
  entry: (typeof experience)[number]
  isLast: boolean
}

function TimelineEntry({ entry, isLast }: TimelineEntryProps) {
  const [expanded, setExpanded] = useState(false)

  const isCurrent = entry.endDate === null

  const period = isCurrent
    ? `${formatMonthYear(entry.startDate)} — Present`
    : `${formatMonthYear(entry.startDate)} — ${formatMonthYear(entry.endDate!)}`

  const duration = formatDuration(entry.startDate, entry.endDate)

  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center" aria-hidden="true">
        <div
          className="mt-1 shrink-0 rounded-full"
          style={{
            width: 12,
            height: 12,
            backgroundColor: isCurrent ? '#6200FF' : 'transparent',
            border: '2px solid #6200FF',
          }}
        />
        {!isLast && (
          <div
            className="mt-2 flex-1 w-0.5"
            style={{ backgroundColor: 'rgba(255,255,255,0.20)', minHeight: 40 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
          <h3
            className="font-display font-semibold text-text-primary"
            style={{ fontSize: 20 }}
          >
            {entry.title}
          </h3>
          <span
            className="font-body shrink-0"
            style={{ fontSize: 14, color: '#B8B0A8' }}
          >
            {period} &middot; {duration}
          </span>
        </div>

        <p
          className="font-body mb-3"
          style={{ fontSize: 16, color: '#B8B0A8' }}
        >
          {entry.company}
        </p>

        <p
          className="font-body text-text-primary leading-relaxed"
          style={{ fontSize: 16, fontWeight: 300, maxWidth: '65ch' }}
        >
          {entry.description}
        </p>

        {entry.highlights && (
          <>
            <div
              style={{
                overflow: 'hidden',
                maxHeight: expanded ? '500px' : '0px',
                transition: 'max-height 0.35s ease',
              }}
            >
              <ul
                className="font-body text-text-primary leading-relaxed mt-3"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  maxWidth: '65ch',
                  paddingLeft: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  listStyleType: 'disc',
                }}
              >
                {entry.highlights.map((point, i) => (
                  <li key={i} style={{ color: '#B8B0A8' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setExpanded(prev => !prev)}
              className="font-body mt-3 flex items-center gap-1"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#6200FF',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Read more'}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <RevealWrapper>
          <SectionHeading title="Experience" />
          <div>
            {experience.map((entry, i) => (
              <TimelineEntry
                key={entry.id}
                entry={entry}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
