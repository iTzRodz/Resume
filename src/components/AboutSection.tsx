import RevealWrapper from './RevealWrapper'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <RevealWrapper>
          <SectionHeading title="About" />
          <div className="max-w-prose space-y-4">
            <p
              className="font-body text-text-primary leading-relaxed"
              style={{ fontSize: 17 }}
            >
              I'm Rodolfo Carvalho, a Full Stack Developer based in Brazil. I started
              programming in early 2021 and have been building products with modern web
              technologies ever since.
            </p>
            <p
              className="font-body text-text-primary leading-relaxed"
              style={{ fontSize: 17 }}
            >
              I enjoy working across the full stack — from crafting interfaces with React
              and Vue to building robust APIs with Laravel and PHP, and managing databases
              with PostgreSQL and MySQL.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
