import { useLayoutEffect, type RefObject } from 'react'

/**
 * Applies a "typewriter" effect to the text content of the referenced
 * element. It runs a single time when the component mounts and clears
 * any pending timeout when the component unmounts.
 */
export default function useTypewriter<T extends HTMLElement>(
  targetRef: RefObject<T | null>
): void {
  useLayoutEffect(() => {
    const el = targetRef.current
    if (!el) return

    const title: HTMLElement = el
    const text = title.textContent ?? ''
    title.textContent = ''
    let i = 0
    let timeout: number | undefined

    function type(): void {
      if (i < text.length) {
        title.textContent = (title.textContent ?? '') + text.charAt(i)
        i++
        timeout = setTimeout(type, 100)
      }
    }
    type()

    return () => {
      if (timeout !== undefined) {
        clearTimeout(timeout)
      }
    }
  }, [])
}