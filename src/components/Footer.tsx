import RevealWrapper from './RevealWrapper'

interface SocialLinkProps {
  href: string
  label: string
  iconSrc: string
}

function SocialLink({ href, label, iconSrc }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center rounded-lg transition-colors duration-200"
      style={{ width: 44, height: 44 }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2C2C3A'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
      }}
    >
      <img src={iconSrc} alt="" aria-hidden="true" width={24} height={24} style={{ width: 24, height: 24 }} />
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="py-20"
      style={{ backgroundColor: '#13131A' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <RevealWrapper>
          <div className="text-center">
            <h2
              className="font-display font-bold text-text-primary mb-4"
              style={{ fontSize: 36 }}
            >
              Let's work together
            </h2>

            <a
              href="mailto:rodolfocarvalho.dev@gmail.com"
              className="font-body inline-block transition-colors duration-200 mb-10"
              style={{ fontSize: 18, color: '#6200FF' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#7A1FFF'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#6200FF'
              }}
            >
              rodolfocarvalho.dev@gmail.com
            </a>

            <hr
              className="mb-8"
              style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }}
            />

            {/* Social links */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <SocialLink
                href="https://www.linkedin.com/in/rodolfocarvalho1/"
                label="LinkedIn profile"
                iconSrc="/assets/img/icons/linkedin.svg"
              />
              <SocialLink
                href="https://gitlab.com/iTzRodz"
                label="GitLab profile"
                iconSrc="/assets/img/icons/gitlab.svg"
              />
              <SocialLink
                href="https://github.com/iTzRodz"
                label="GitHub profile"
                iconSrc="/assets/img/icons/github.svg"
              />
            </div>

            <p
              className="font-body mb-2"
              style={{ fontSize: 14, color: '#8B8494' }}
            >
              You may find this repository{' '}
              <a
                href="https://github.com/iTzRodz/Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: '#6200FF' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#7A1FFF'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#6200FF'
                }}
              >
                here
              </a>
            </p>

            <p
              className="font-body"
              style={{ fontSize: 14, color: '#8B8494' }}
            >
              &copy; {year} Rodolfo Carvalho
            </p>
          </div>
        </RevealWrapper>
      </div>
    </footer>
  )
}
