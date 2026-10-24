export interface Project {
  title: string
  tech: string
  description: string
  /** Icon file name inside `public/icons`. */
  icon?: string
  /** Emoji alternative to the icon (for projects without an image). */
  emoji?: string
  /** URL of the published project. */
  link?: string
  /** When `true`, the project is not available yet. */
  disabled?: boolean
}

/** Projects shown in the Projects section. */
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
    title: 'Coming Soon',
    tech: 'In development',
    description: 'New projects under construction. Stay tuned!',
    icon: 'clock.svg',
    disabled: true
  }
]