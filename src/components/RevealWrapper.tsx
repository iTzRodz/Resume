import { useReveal } from '../hooks/useReveal'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
}

/**
 * Wraps content in a fade-in + slide-up reveal animation
 * when the element enters the viewport. Fires once.
 * Respects prefers-reduced-motion via CSS.
 */
export default function RevealWrapper({ children, className = '' }: RevealWrapperProps) {
  const [ref, isVisible] = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
    >
      {children}
    </div>
  )
}
