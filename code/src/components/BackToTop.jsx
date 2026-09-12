export default function BackToTop({ visible }) {
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