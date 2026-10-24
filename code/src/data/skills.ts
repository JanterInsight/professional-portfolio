/** A skill with its level expressed as a percentage (e.g. `'80%'`). */
export interface Skill {
  name: string
  level: string
}

/** A skills category with a heading and its list of skills. */
export interface SkillCategory {
  title: string
  skills: Skill[]
}

/** Skills shown in the Skills section. */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: '85%' },
      { name: 'JavaScript', level: '80%' },
      { name: 'HTML/CSS', level: '95%' },
      { name: 'Python', level: '100%' }
    ]
  },
  {
    title: 'Frameworks and Tools',
    skills: [
      { name: 'Git/GitHub', level: '95%' },
      { name: 'VS Code', level: '100%' },
      { name: 'React', level: '85%' }
    ]
  },
  {
    title: 'Databases',
    skills: [{ name: 'SQL (SQLite)', level: '85%' }]
  }
]