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
      className={`card-hover flex flex-col items-center justify-center gap-2 rounded-xl p-3 cursor-default ${
        visible ? 'skill-visible' : 'skill-hidden'
      }`}
      style={{
        width: '100%',
        minHeight: 110,
        backgroundColor: '#23232F',
        border: '1px solid rgba(255,255,255,0.08)',
        animationDelay: visible ? `${delay}ms` : undefined,
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

// Pre-compute global index per skill to avoid side effects during render
const skillsWithIndex = CATEGORIES.flatMap((cat) =>
  skills.filter((s) => s.category === cat)
).reduce<Map<string, number>>((acc, skill, i) => {
  acc.set(skill.name, i)
  return acc
}, new Map())

export default function SkillsSection() {
  const [ref, visible] = useReveal<HTMLDivElement>({ threshold: 0.1 })

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
                  {catSkills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={skillsWithIndex.get(skill.name) ?? 0}
                      visible={visible}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
