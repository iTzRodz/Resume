export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  thumbnail: string | null;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'H3iisk Links',
    description:
      'A centralized link-in-bio page for streamer H3iisk, aggregating all social media and contact links in a single clean interface. Live in production on Vercel.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/iTzRodz/h3iisk-links',
    liveUrl: 'https://h3iisk-links.vercel.app',
    thumbnail: '/assets/img/projects/h3iisk-thumbnail.webp',
  },
  {
    id: '2',
    name: 'Resume Portfolio',
    description:
      'This portfolio website, built with Vite, React, and Tailwind CSS. Fully responsive with scroll animations and accessible design.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/iTzRodz/Resume',
    liveUrl: null,
    thumbnail: null,
  },
]
