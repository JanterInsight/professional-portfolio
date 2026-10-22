import { useEffect, useState } from 'react'

/**
 * Returns the current vertical scroll position of the window (in pixels).
 * The value is updated on each scroll event; useful for UI that depends
 * on the scroll position (e.g. a "back to top" button).
 */
export default function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    // Passive listeners cannot be cancelled, so they never block the
    // main thread while the page is being scrolled.
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}