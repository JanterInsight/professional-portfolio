import { useEffect } from 'react'

export default function ParticleBackground() {
  useEffect(() => {
    const container = document.getElementById('particles')
    if (!container) return

    const count = 50
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 10 + 's'
      particle.style.animationDuration = (5 + Math.random() * 10) + 's'
      container.appendChild(particle)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div className="particles-container" id="particles"></div>
}