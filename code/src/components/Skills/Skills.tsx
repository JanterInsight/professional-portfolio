import type { CSSProperties } from 'react'
import { skillCategories } from '../../data/skills'
import './Skills.css'

/** Sección de habilidades, renderizada a partir de `data/skills`. */
export default function Skills() {
  return (
    <section id="skills" className="card reveal">
      <h2 className="card-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map(category => (
          <div className="skill-category" key={category.title}>
            <h3>{category.title}</h3>
            {category.skills.map(skill => (
              <div className="skill-bar" key={skill.name}>
                <span className="skill-name">{skill.name}</span>
                <div className="bar-container">
                  <div className="bar-fill" style={{ '--level': skill.level } as CSSProperties}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}