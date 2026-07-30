export default function Skills() {
  return (
    <section id="skills" className="card reveal">
      <h2 className="card-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skill-bar">
            <span className="skill-name">Java</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '85%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">C++</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '75%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">JavaScript</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '70%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">HTML/CSS</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '80%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">Python</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '65%' }}></div></div>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Frameworks and Tools</h3>
          <div className="skill-bar">
            <span className="skill-name">Swing/JavaFX</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '80%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">Maven</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '70%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">Git/GitHub</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '75%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">VS Code/IntelliJ</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '85%' }}></div></div>
          </div>
          <div className="skill-bar">
            <span className="skill-name">React</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '75%' }}></div></div>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill-bar">
            <span className="skill-name">SQL (SQLite)</span>
            <div className="bar-container"><div className="bar-fill" style={{ '--level': '70%' }}></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}