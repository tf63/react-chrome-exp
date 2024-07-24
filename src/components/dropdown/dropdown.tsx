import { useCloseRef } from '@/hooks/use-close-ref'

type DropdownProps = {
    summary: string
    children: React.ReactNode
}

export const Dropdown = ({ summary, children }: DropdownProps) => {
    const { closeRef } = useCloseRef()
    return (
        <details className="dropdown dropdown-top" ref={closeRef}>
            <summary className="btn shadow-btn hover:bg-base-200 min-w-[160px] font-semibold hover:border-transparent">
                {summary}
            </summary>
            <div className="dropdown-content bg-base-200 shadow-btn z-50 mb-5 flex w-60 items-center justify-center rounded-lg p-5">
                {children}
            </div>
        </details>
    )
}
