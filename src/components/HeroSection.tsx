export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center"
      style={{ minHeight: '100vh', paddingTop: 'var(--navbar-height)' }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Desktop: side-by-side. Mobile: stacked centered */}
        <div
          className="flex flex-col items-center text-center md:grid md:text-left"
          style={{
            gridTemplateColumns: 'auto 1fr',
            gap: '96px',
            alignItems: 'center',
          }}
        >
          {/* Photo */}
          <div className="mb-8 md:mb-0 shrink-0">
            <img
              src="/assets/img/myself-main.jpg"
              alt="Rodolfo Carvalho"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover"
              style={{
                border: '3px solid rgba(98,0,255,0.30)',
                boxShadow: '0 0 0 8px rgba(98,0,255,0.10)',
              }}
              width={240}
              height={240}
            />
          </div>

          {/* Text */}
          <div>
            <h1
              className="font-display font-bold text-text-primary mb-3"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
            >
              Rodolfo Carvalho
            </h1>

            <p
              className="font-display mb-5"
              style={{ fontSize: 28, color: '#6200FF', fontWeight: 400 }}
            >
              Full Stack Developer
            </p>

            <p
              className="font-body text-text-primary leading-relaxed mb-8 mx-auto md:mx-0"
              style={{ fontSize: 18, fontWeight: 300, maxWidth: '55ch' }}
            >
              I started into programming in early 2021, and have been building web
              products with Vue, React, Laravel, and PostgreSQL since.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start justify-center md:justify-start">
              <a
                href="#projects"
                className="flex items-center justify-center font-body font-medium transition-all duration-200 rounded"
                style={{
                  height: 48,
                  paddingLeft: 24,
                  paddingRight: 24,
                  backgroundColor: '#6200FF',
                  color: '#1B1B25',
                  fontSize: 15,
                  minWidth: 148,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.backgroundColor = '#7A1FFF'
                  el.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.backgroundColor = '#6200FF'
                  el.style.transform = 'translateY(0)'
                }}
              >
                View Projects
              </a>

              <a
                href="/assets/cv.pdf"
                download
                className="flex items-center justify-center font-body font-medium transition-all duration-200 rounded"
                style={{
                  height: 48,
                  paddingLeft: 24,
                  paddingRight: 24,
                  border: '1px solid rgba(98,0,255,0.30)',
                  color: '#FFF2E7',
                  fontSize: 15,
                  minWidth: 148,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = '#6200FF'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(98,0,255,0.30)'
                }}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
