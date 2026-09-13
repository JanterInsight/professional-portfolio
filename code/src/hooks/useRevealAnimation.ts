import { useEffect } from 'react'

/**
 * Observa todos los elementos con clase `.reveal` del documento y les
 * añade la clase `active` cuando entran en el viewport, activando así
 * la animación de revelado al hacer scroll.
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

    return () => {
      revealElements.forEach(el => observer.unobserve(el))
    }
  }, [])
}