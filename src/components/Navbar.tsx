import { useEffect, useRef, useState } from 'react'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

const SPY_IDS = ['about', 'skills', 'experience', 'projects', 'contact']

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Navbar() {
  const scrolled             = useNavbarScroll(80)
  const activeId             = useScrollSpy(SPY_IDS)
  const [open, setOpen]      = useState(false)
  const hamburgerRef         = useRef<HTMLButtonElement>(null)
  const drawerRef            = useRef<HTMLDivElement>(null)

  const isActive = (href: string) => {
    const id = href.replace('#', '')
    if (href === '#about') return activeId === 'about' || activeId === 'skills'
    return activeId === id
  }

  const closeMenu = () => setOpen(false)

  // Focus first item when drawer opens; return focus to hamburger when it closes
  useEffect(() => {
    if (open) {
      const first = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE)
      first?.focus()
    } else {
      hamburgerRef.current?.focus()
    }
  }, [open])

  // Focus trap + Escape key inside mobile drawer
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
        return
      }

      if (e.key !== 'Tab') return

      const drawer    = drawerRef.current
      if (!drawer) return

      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (focusable.length === 0) return

      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 'var(--navbar-height)',
        background: scrolled ? 'rgba(19, 19, 26, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid transparent',
      }}
    >
      <nav
        className="mx-auto flex h-full max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight"
          style={{ color: '#6200FF' }}
          aria-label="Rodolfo Carvalho — home"
        >
          RC
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href)
            return (
              <li key={href}>
                <a
                  href={href}
                  className="relative font-body font-medium transition-colors duration-200"
                  style={{
                    fontSize: 15,
                    color: active ? '#6200FF' : '#FFF2E7',
                    paddingBottom: 4,
                    borderBottom: active ? '2px solid #6200FF' : '2px solid transparent',
                  }}
                  aria-current={active ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          ref={hamburgerRef}
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 rounded"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="block h-0.5 w-6 transition-all duration-200 rounded"
            style={{
              backgroundColor: '#FFF2E7',
              transform: open ? 'translateY(8px) rotate(45deg)' : undefined,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200 rounded"
            style={{
              backgroundColor: '#FFF2E7',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200 rounded"
            style={{
              backgroundColor: '#FFF2E7',
              transform: open ? 'translateY(-8px) rotate(-45deg)' : undefined,
            }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="md:hidden absolute left-0 right-0 top-16 z-50 px-6 pb-6 pt-4 transition-all duration-200"
        style={{
          background: 'rgba(19, 19, 26, 0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          visibility: open ? 'visible' : 'hidden',
        }}
      >
        <ul className="flex flex-col gap-4" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href)
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block font-body font-medium text-base py-2 transition-colors duration-200"
                  style={{ color: active ? '#6200FF' : '#FFF2E7' }}
                  aria-current={active ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
