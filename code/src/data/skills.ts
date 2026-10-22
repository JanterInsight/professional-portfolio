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
      { name: 'Java', level: '85%' },
      { name: 'C++', level: '75%' },
      { name: 'JavaScript', level: '70%' },
      { name: 'HTML/CSS', level: '80%' },
      { name: 'Python', level: '65%' }
    ]
  },
  {
    title: 'Frameworks and Tools',
    skills: [
      { name: 'Swing/JavaFX', level: '80%' },
      { name: 'Maven', level: '70%' },
      { name: 'Git/GitHub', level: '75%' },
      { name: 'VS Code/IntelliJ', level: '85%' },
      { name: 'React', level: '75%' }
    ]
  },
  {
    title: 'Databases',
    skills: [{ name: 'SQL (SQLite)', level: '70%' }]
  }
]