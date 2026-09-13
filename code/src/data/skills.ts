/** Una habilidad con su nivel expresado en porcentaje (pe. `'80%'`). */
export interface Skill {
  name: string
  level: string
}

/** Una categoría de habilidades con un título y su listado. */
export interface SkillCategory {
  title: string
  skills: Skill[]
}

/** Habilidades mostradas en la sección de Skills. */
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