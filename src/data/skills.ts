export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tooling';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML',       icon: '/assets/img/icons/html.svg',       category: 'Frontend' },
  { name: 'CSS',        icon: '/assets/img/icons/css.svg',        category: 'Frontend' },
  { name: 'JavaScript', icon: '/assets/img/icons/javascript.svg', category: 'Frontend' },
  { name: 'Vue.js',     icon: '/assets/img/icons/vuejs.svg',      category: 'Frontend' },
  { name: 'React',      icon: '/assets/img/icons/react.svg',      category: 'Frontend' },
  { name: 'Next.js',    icon: '/assets/img/icons/nextjs.svg',     category: 'Frontend' },
  // Backend
  { name: 'PHP',        icon: '/assets/img/icons/php.svg',        category: 'Backend'  },
  { name: 'Laravel',    icon: '/assets/img/icons/laravel.svg',    category: 'Backend'  },
  { name: 'PostgreSQL', icon: '/assets/img/icons/postgresql.svg', category: 'Backend'  },
  { name: 'MySQL',      icon: '/assets/img/icons/mysql.svg',      category: 'Backend'  },
  // Tooling
  { name: 'Git',        icon: '/assets/img/icons/git.svg',        category: 'Tooling'  },
  { name: 'GitLab',     icon: '/assets/img/icons/gitlab.svg',     category: 'Tooling'  },
]
