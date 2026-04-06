import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * The ref should be attached to a container element.
 * isVisible flips to true once the element enters the viewport (fires once).
 */
export function useReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Serialize options to a stable string so the effect only re-runs
  // if the actual values change, not just the object reference.
  const optionsSerialized = JSON.stringify(options)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const parsedOptions: IntersectionObserverInit = optionsSerialized
      ? JSON.parse(optionsSerialized)
      : {}

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '-40px 0px', ...parsedOptions }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [optionsSerialized])

  return [ref, isVisible]
}
