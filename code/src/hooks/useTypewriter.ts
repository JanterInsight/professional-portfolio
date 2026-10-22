import { useLayoutEffect, type RefObject } from 'react'

/**
 * Applies a "typewriter" effect to the text content of the referenced
 * element. It runs a single time when the component mounts and clears
 * any pending timeout when the component unmounts.
 *
 * @param targetRef - Ref to the element where the effect is applied.
 * @param text - Full text to type out character by character.
 */
export default function useTypewriter<T extends HTMLElement>(
  targetRef: RefObject<T | null>,
  text: string
): void {
  useLayoutEffect(() => {
    const el = targetRef.current
    if (!el || !text) return

    el.textContent = ''
    let i = 0
    let timeout: number | undefined

    function type(): void {
      if (!el || i >= text.length) return
      el.textContent = text.slice(0, i + 1)
      i++
      timeout = setTimeout(type, 100)
    }
    type()

    return () => {
      if (timeout !== undefined) {
        clearTimeout(timeout)
      }
    }
  }, [text])
}