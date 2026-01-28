import * as React from 'react'

// Tailwind's md breakpoint for detecting mobile vs desktop
const MOBILE_BREAKPOINT = 768

/**
 * Custom hook to detect if the viewport is in mobile size range.
 * Uses media query listener for reactive responsiveness.
 * @returns Boolean indicating if viewport width is less than md breakpoint (768px)
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
