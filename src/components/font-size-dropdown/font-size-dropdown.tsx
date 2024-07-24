import { useCloseRef } from '@/hooks/use-close-ref'

type FontSizeDropdownProps = {
    fontSize: string
    setFontSize: (fontSize: string) => void
}

export const FontSizeDropdown = ({ fontSize, setFontSize }: FontSizeDropdownProps) => {
    const { closeRef } = useCloseRef()
    return (
        <details className="dropdown dropdown-top" ref={closeRef}>
            <summary
                tabIndex={-1}
                className="btn min-w-[140px] font-semibold shadow-btn hover:border-transparent hover:bg-base-200"
            >
                FontSize {fontSize}
            </summary>

            <ul className="dropdown-content z-50 mb-5 w-32 items-center justify-center rounded-lg bg-base-200 shadow-btn">
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="16px"
                        value="16px"
                        className="btn w-full justify-start"
                        onChange={(event) => setFontSize(event.target.value)}
                        defaultChecked
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="32px"
                        value="32px"
                        className="btn w-full justify-start"
                        onChange={(event) => setFontSize(event.target.value)}
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="48px"
                        value="48px"
                        className="btn w-full justify-start"
                        onChange={(event) => setFontSize(event.target.value)}
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="64px"
                        value="64px"
                        className="btn w-full justify-start"
                        onChange={(event) => setFontSize(event.target.value)}
                    />
                </li>
            </ul>
        </details>
    )
}
