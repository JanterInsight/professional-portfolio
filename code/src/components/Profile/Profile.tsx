import { useRef } from 'react'
import useTypewriter from '../../hooks/useTypewriter'
import { imageUrl } from '../../utils/assets'
import './Profile.css'

/** Cabecera de perfil con imagen, título animado, subtítulo y etiquetas. */
export default function Profile() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useTypewriter(titleRef)

  return (
    <div className="profile">
      <div className="profile-glow"></div>
      <img src={imageUrl('Smoking.png')} alt="Profile picture of Janlier Rojas" className="profile-img" />
      <div className="profile-info">
        <h1 className="profile-title" ref={titleRef}>Janlier Rojas Santana</h1>
        <p className="profile-subtitle">Junior Developer • Java & Web • AI Enthusiast</p>
        <div className="profile-tags">
          <span className="tag">Java</span>
          <span className="tag">Web</span>
          <span className="tag">AI</span>
        </div>
      </div>
    </div>
  )
}