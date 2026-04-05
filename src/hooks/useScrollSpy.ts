import { useEffect, useState } from 'react'

/**
 * Watches a list of section IDs and returns the one currently in view.
 * Uses IntersectionObserver with a top-offset threshold to account for the navbar.
 */
export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const handleIntersect =
      (id: string) =>
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setActiveId(id)
        }
      }

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(handleIntersect(id), {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      })
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [ids])

  return activeId
}
