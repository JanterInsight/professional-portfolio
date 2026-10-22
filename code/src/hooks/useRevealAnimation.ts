import { useEffect } from 'react'

/**
 * Observes every element with the `.reveal` class in the document and
 * adds the `active` class when it enters the viewport, triggering the
 * reveal-on-scroll animation. Runs once when the app mounts.
 */
export default function useRevealAnimation(): void {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll<Element>('.reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}