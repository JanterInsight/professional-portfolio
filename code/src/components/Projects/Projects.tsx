import { projects } from '../../data/projects'
import { iconUrl } from '../../utils/assets'
import './Projects.css'

/** Sección de proyectos, renderizada a partir de `data/projects`. */
export default function Projects() {
  return (
    <section id="projects" className="card reveal">
      <h2 className="card-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <article className="project-card" key={project.title}>
            <div className="project-icon">
              {project.icon ? (
                <img
                  className="project-icon-img"
                  src={iconUrl(project.icon)}
                  srcSet={`${iconUrl(project.icon)} 1x, ${iconUrl(project.icon)} 2x`}
                  alt={`${project.title} icon`}
                  width="64"
                  height="64"
                  loading="lazy"
                />
              ) : (
                project.emoji
              )}
            </div>
            <h3>{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p>{project.description}</p>
            {project.disabled ? (
              <span className="project-link disabled">Coming Soon</span>
            ) : (
              <a
                href={project.link ?? '#'}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}