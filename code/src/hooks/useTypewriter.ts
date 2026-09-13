import { useEffect, type RefObject } from 'react'

/**
 * Aplica un efecto "máquina de escribir" sobre el contenido de texto del
 * elemento referenciado. Se ejecuta una única vez al montar el componente.
 */
export default function useTypewriter<T extends HTMLElement>(
  targetRef: RefObject<T | null>
): void {
  useEffect(() => {
    const el = targetRef.current
    if (el) {
      const title: HTMLElement = el
      const text = title.textContent ?? ''
      title.textContent = ''
      let i = 0

      function type(): void {
        if (i < text.length) {
          title.textContent = (title.textContent ?? '') + text.charAt(i)
          i++
          setTimeout(type, 100)
        }
      }
      type()
    }
  }, [])
}