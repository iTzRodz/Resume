import RevealWrapper from './RevealWrapper'
import SectionHeading from './SectionHeading'
import { projects, type Project } from '../data/projects'

// Inline GitHub SVG (since we need it as a small icon in a button context)
function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="project-card-hover flex flex-col rounded-2xl overflow-hidden"
      style={{
        backgroundColor: '#23232F',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Thumbnail */}
      <div
        className="w-full shrink-0 flex items-center justify-center"
        style={{ height: 200, backgroundColor: '#2C2C3A' }}
        aria-hidden="true"
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span style={{ color: '#8B8494', fontSize: 13 }}>No preview</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-display font-semibold text-text-primary mb-2"
          style={{ fontSize: 20 }}
        >
          {project.name}
        </h3>

        <p
          className="font-body mb-4 flex-1"
          style={{
            fontSize: 14,
            color: '#B8B0A8',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body font-medium rounded"
              style={{
                fontSize: 12,
                background: 'rgba(98,0,255,0.10)',
                border: '1px solid rgba(98,0,255,0.30)',
                color: '#7A1FFF',
                padding: '4px 10px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent flex items-center gap-2 font-body font-medium"
              style={{ fontSize: 14, color: '#B8B0A8', minHeight: 44 }}
              aria-label={`${project.name} source code on GitHub`}
            >
              <GitHubIcon />
              Source
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent flex items-center gap-2 font-body font-medium"
              style={{ fontSize: 14, color: '#B8B0A8', minHeight: 44 }}
              aria-label={`${project.name} live demo`}
            >
              <ExternalLinkIcon />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24" style={{ backgroundColor: '#23232F' }}>
      <div className="mx-auto max-w-6xl px-6">
        <RevealWrapper>
          <SectionHeading title="Projects" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 24,
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
