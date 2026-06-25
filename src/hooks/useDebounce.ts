import { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [input, setInput] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInput(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return input
}
