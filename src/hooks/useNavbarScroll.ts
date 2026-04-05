import { useEffect, useState } from 'react'

/**
 * Returns true once the page has been scrolled past the given threshold (px).
 */
export function useNavbarScroll(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    // Check immediately on mount
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
