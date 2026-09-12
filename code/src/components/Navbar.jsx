import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        <a href="#" className="nav-brand">Professional Portfolio</a>
        
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          id="hamburger" 
          aria-label="Toggle navigation menu" 
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <ul className={`nav-list ${isOpen ? 'active' : ''}`} id="navList">
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About Me</a></li>
          <li><a href="#studies" className="nav-link" onClick={closeMenu}>Education</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}