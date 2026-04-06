export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;    // format: "YYYY-MM"
  /**
   * Set to null while you're still at the company.
   * The duration and period will be calculated automatically using today's date.
   *
   * When you leave, set it to the end date (e.g. "2025-06") and the
   * counter will freeze at that value automatically — no other changes needed.
   */
  endDate: string | null;
  description: string;
  highlights?: string[];
}

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Junior Full Stack Developer',
    company: 'NoPing',
    startDate: '2023-08',
    endDate: null, // still here — set to "YYYY-MM" when you leave
    description:
      'Full-stack developer contributing across frontend, backend, and deployment — from greenfield projects to legacy maintenance and the main website overhaul.',
    highlights: [
      'Built a B3 stock market management platform end-to-end and solo — migrated data from spreadsheets into a structured system with multiple views for tracking and analyzing stocks, handling both frontend and backend, plus all deployments.',
      'Actively contributed to the redesign of NoPing\'s main website — the project I was most involved in. Work included multi-language support, third-party API integrations, and new landing page builds, with a primary focus on frontend and some backend tasks as well.',
      'Maintained and improved legacy projects, fixing bugs and adding features to existing production systems.',
      'Participated in a partial API refactoring effort, contributing to selected modules and endpoints.',
    ],
  },
  {
    id: '2',
    title: 'Junior Full Stack Developer',
    company: 'Associação Comercial e de Inovação de Marília',
    startDate: '2023-06',
    endDate: '2023-06',
    description:
      'Joined the Development team to contribute to the creation of a new ERP for entities using Vue.js and Laravel. Worked on both front-end interfaces and back-end logic.',
  },
  {
    id: '3',
    title: 'Intern Developer Full Stack',
    company: 'Associação Comercial e de Inovação de Marília',
    startDate: '2022-05',
    endDate: '2023-06',
    description:
      'Developed features for an ERP system using Vue.js and Laravel. Gained experience with Git workflows and mentored new interns on the team.',
  },
  {
    id: '4',
    title: 'Help Desk',
    company: 'Associação Comercial e de Inovação de Marília',
    startDate: '2021-12',
    endDate: '2022-05',
    description:
      'Managed company infrastructure including computer and printer maintenance. Enhanced communication with clients and developed quick problem-solving skills.',
  },
]

/** Returns a human-readable duration like "1 yr 3 mo" */
export function formatDuration(startDate: string, endDate: string | null): string {
  const start = parseYearMonth(startDate)
  const end   = endDate ? parseYearMonth(endDate) : new Date()

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (months < 1) months = 1

  const years = Math.floor(months / 12)
  const rem   = months % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} yr`)
  if (rem  > 0) parts.push(`${rem} mo`)
  if (parts.length === 0) parts.push('1 mo')

  return parts.join(' ')
}

function parseYearMonth(ym: string): Date {
  const [y, m] = ym.split('-').map(Number)
  return new Date(y, (m ?? 1) - 1, 1)
}

/** Formats "2023-08" → "Aug 2023" */
export function formatMonthYear(ym: string): string {
  const [y, m] = ym.split('-').map(Number)
  const date = new Date(y, (m ?? 1) - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
