import katex from 'katex'
import { Ref, forwardRef, useEffect, useRef } from 'react'

import 'katex/dist/katex.min.css'

type FormulaProps = {
    formula: string
    inline: boolean
}

const FormulaContent = ({ formula, inline }: FormulaProps, ref: Ref<HTMLDivElement>) => {
    const formulaRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (formulaRef.current == null) {
            return
        }

        katex.render(formula, formulaRef.current, {
            throwOnError: false,
            displayMode: !inline
        })
    }, [formula, inline])

    return (
        <div className="flex justify-center">
            <div ref={ref} className="flex h-fit min-h-16 w-fit items-center">
                <span ref={formulaRef} className="[&>span]:m-0" />
            </div>
        </div>
    )
}

export const Formula = forwardRef<HTMLDivElement, FormulaProps>(FormulaContent)
