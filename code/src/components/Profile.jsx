import { useEffect, useRef } from 'react'

export default function Profile() {
  const titleRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const text = title.textContent
    title.textContent = ''
    let i = 0

    function type() {
      if (i < text.length) {
        title.textContent += text.charAt(i)
        i++
        setTimeout(type, 100)
      }
    }
    type()
  }, [])

  return (
    <div className="profile">
      <div className="profile-glow"></div>
      <img src={`${import.meta.env.BASE_URL}images/Smoking.png`} alt="Profile picture of Janlier Rojas" className="profile-img" />
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