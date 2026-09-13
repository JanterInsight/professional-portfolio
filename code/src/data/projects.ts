export interface Project {
  title: string
  tech: string
  description: string
  /** Nombre del archivo de icono dentro de `public/icons`. */
  icon?: string
  /** Emoji alternativo al icono (para proyectos sin imagen). */
  emoji?: string
  /** URL del proyecto publicado. */
  link?: string
  /** Si es `true`, el proyecto aún no está disponible. */
  disabled?: boolean
}

/** Proyectos mostrados en la sección de Projects. */
export const projects: Project[] = [
  {
    title: 'Pure Music Lovers Web',
    tech: 'React • Web',
    description:
      'Official website for Puros Melómanos music community. Discover amazing musical events and connect with other music lovers.',
    icon: 'Pure-Music-Lovers-Web-Icon-Main-Full-64x64.png',
    link: 'https://janterinsight.github.io/pure-music-lovers-web'
  },
  {
    title: 'The Courtyard of Delights',
    tech: 'React • Web',
    description:
      'Modern landing page for an artisanal ice cream shop. Features interactive gallery, smooth animations, and responsive design.',
    icon: 'The-Courtyard-Of-Delights-Icon-Main-Full-64x64.png',
    link: 'https://janterinsight.github.io/the-courtyard-of-delights'
  },
  {
    title: 'NexusAI',
    tech: 'Java • Web • AI',
    description:
      'AI assistant for productivity and task management. Modern landing page with animations and responsive design.',
    emoji: '🤖',
    disabled: true
  },
  {
    title: 'Coming Soon',
    tech: 'In development',
    description: 'New projects under construction. Stay tuned!',
    emoji: '🚀',
    disabled: true
  }
]