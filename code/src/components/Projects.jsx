export default function Projects() {
  return (
    <section id="projects" className="card reveal">
      <h2 className="card-title">Projects</h2>
      <div className="projects-grid">
        <article className="project-card">
          <div className="project-icon">🎵</div>
          <h3>Pure Music Lovers Web</h3>
          <p className="project-tech">React • Web</p>
          <p>Official website for Puros Melómanos music community. Discover amazing musical events and connect with other music lovers.</p>
          <a href="https://janterinsight.github.io/pure-music-lovers-web" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </article>

        <article className="project-card">
          <div className="project-icon">🍦</div>
          <h3>The Courtyard of Delights</h3>
          <p className="project-tech">React • Web</p>
          <p>Modern landing page for an artisanal ice cream shop. Features interactive gallery, smooth animations, and responsive design.</p>
          <a href="https://janterinsight.github.io/the-courtyard-of-delights" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </article>

        <article className="project-card">
          <div className="project-icon">🤖</div>
          <h3>NexusAI</h3>
          <p className="project-tech">Java • Web • AI</p>
          <p>AI assistant for productivity and task management. Modern landing page with animations and responsive design.</p>
          <span className="project-link disabled">Coming Soon</span>
        </article>
        
        <article className="project-card">
          <div className="project-icon">🚀</div>
          <h3>Coming Soon</h3>
          <p className="project-tech">In development</p>
          <p>New projects under construction. Stay tuned!</p>
          <span className="project-link disabled">Coming soon</span>
        </article>
      </div>
    </section>
  )
}