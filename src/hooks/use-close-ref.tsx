import { useEffect, useRef } from 'react'

export const useCloseRef = () => {
    const closeRef = useRef<HTMLDetailsElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (closeRef.current == null || event.target == null) {
                return
            }

            if (event.target instanceof Node && !closeRef.current.contains(event.target)) {
                if (closeRef.current.open) {
                    closeRef.current.open = false
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return { closeRef }
}
