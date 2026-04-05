interface SectionHeadingProps {
  title: string
}

/**
 * Renders an accent line + section title used across all sections.
 */
export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <div
        className="mb-6 rounded-sm"
        style={{ width: 40, height: 3, backgroundColor: '#6200FF' }}
        aria-hidden="true"
      />
      <h2 className="font-display font-bold text-text-primary text-3xl md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
