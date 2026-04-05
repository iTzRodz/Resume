import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { skills, type Skill } from '../data/skills'

const CATEGORIES: Skill['category'][] = ['Frontend', 'Backend', 'Tooling']

interface SkillCardProps {
  skill: Skill
  index: number
  visible: boolean
}

function SkillCard({ skill, index, visible }: SkillCardProps) {
  const delay = Math.min(index * 40, 280)

  return (
    <div
      className={`skill-card group flex flex-col items-center justify-center gap-2 rounded-xl p-3 cursor-default transition-all duration-200 ease-out ${
        visible ? 'skill-visible' : 'skill-hidden'
      }`}
      style={{
        width: '100%',
        minHeight: 110,
        backgroundColor: '#23232F',
        border: '1px solid rgba(255,255,255,0.08)',
        animationDelay: visible ? `${delay}ms` : undefined,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = 'rgba(98,0,255,0.30)'
        el.style.boxShadow = '0 8px 24px rgba(98,0,255,0.10)'
        el.style.backgroundColor = '#2C2C3A'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'rgba(255,255,255,0.08)'
        el.style.boxShadow = 'none'
        el.style.backgroundColor = '#23232F'
      }}
    >
      <img
        src={skill.icon}
        alt={`${skill.name} logo`}
        width={48}
        height={48}
        style={{ width: 48, height: 48, objectFit: 'contain' }}
      />
      <span
        className="font-body font-medium text-center"
        style={{ fontSize: 13, color: '#B8B0A8' }}
      >
        {skill.name}
      </span>
    </div>
  )
}

export default function SkillsSection() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.1 })

  let globalIndex = 0

  return (
    <section id="skills" className="py-24" style={{ backgroundColor: '#23232F' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref}>
          <div className={visible ? 'reveal-visible' : 'reveal-hidden'}>
            <SectionHeading title="Skills" />
          </div>

          {CATEGORIES.map((category) => {
            const catSkills = skills.filter((s) => s.category === category)
            return (
              <div key={category} className="mb-10 last:mb-0">
                <p
                  className="font-body font-medium mb-4"
                  style={{ fontSize: 13, color: '#8B8494', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {category}
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
                    gap: 12,
                  }}
                >
                  {catSkills.map((skill) => {
                    const idx = globalIndex++
                    return (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={idx}
                        visible={visible}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
