import { useEffect, useState } from 'react'

/**
 * Devuelve la posición vertical actual del scroll de la ventana (px).
 * Se actualiza en cada evento de scroll y es útil para UI condicionada
 * a la posición (p. ej. botón "volver arriba").
 */
export default function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}