import './BackToTop.css'

interface BackToTopProps {
  visible: boolean
}

/** Floating button that scrolls back to the top; visible while scrolling. */
export default function BackToTop({ visible }: BackToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      id="backToTop"
      className={`back-to-top ${visible ? 'visible' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <span className="back-to-top-icon">⬆</span>
    </button>
  )
}