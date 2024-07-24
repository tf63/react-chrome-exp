import { useCallback, useEffect } from 'react'

import { useToast } from '@/hooks/use-toast'

import { FormulaTemplate } from '@/components/formula-template'

const layoutTemplates: Template[] = [
    { type: 'layout', kbd: '1', formula: '\\begin{matrix}\n\ta & b \\\\\n\tc & d\n\\end{matrix}' },
    { type: 'layout', kbd: '2', formula: '\\begin{pmatrix}\n\ta & b \\\\\n\tc & d\n\\end{pmatrix}' },
    { type: 'layout', kbd: '3', formula: '\\begin{bmatrix}\n\ta & b \\\\\n\tc & d\n\\end{bmatrix}' },
    { type: 'layout', kbd: '4', formula: '\\begin{Bmatrix}\n\ta & b \\\\\n\tc & d\n\\end{Bmatrix}' },
    { type: 'layout', kbd: '5', formula: '\\begin{vmatrix}\n\ta & b \\\\\n\tc & d\n\\end{vmatrix}' },
    { type: 'layout', kbd: '6', formula: '\\begin{Vmatrix}\n\ta & b \\\\\n\tc & d\n\\end{Vmatrix}' }
]

const caseTemplates: Template[] = [
    {
        type: 'case',
        kbd: '7',
        formula: 'x = \\begin{cases}\n\ta &\\text{if } b \\\\\n\tc &\\text{if } d\n\\end{cases}'
    }
]

const alignTemplates: Template[] = [
    {
        type: 'align',
        kbd: '8',
        formula: '\\begin{align}\\nonumber\n\t\\begin{split}\n\t\ta &=b+c\\\\\n\t\t&=e+f\n\t\\end{split}\n\\end{align}'
    }
]

const annotationTemplates: Template[] = [
    { type: 'annotation', kbd: '9', formula: 'x = \\underbrace{a + b + c}_{\\text{note}}' },
    { type: 'annotation', kbd: '0', formula: 'x = \\overbrace{a + b + c}^{\\text{note}}' }
]

const templates: Template[] = [...layoutTemplates, ...caseTemplates, ...alignTemplates, ...annotationTemplates]

const FormulaTemplates = () => {
    const { notifyWithPromise } = useToast()

    const copyFunction = useCallback(
        (text: string, message: string) => {
            notifyWithPromise(message, navigator.clipboard.writeText(text))
        },
        [notifyWithPromise]
    )

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey) {
                // ここでpreventDefaultしないとinput要素への入力も受け付けなくなる
                e.preventDefault()

                const template = templates.find((t) => e.key === t.kbd)
                if (template) {
                    copyFunction(template.formula, `Copied Template #${template.kbd}`)
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [copyFunction])

    return (
        <>
            {/* 各テンプレートのコンテナは共通化したくなったらする */}

            {/* Layout Templates */}
            <p className="font-semibold">Layout</p>
            <div className="grid grid-cols-2 gap-1">
                {layoutTemplates.map((template) => (
                    <FormulaTemplate key={template.kbd} template={template} />
                ))}
            </div>

            <div className="divider mb-2 mt-0 opacity-70" />

            {/* Case Templates */}
            <p className="font-semibold">Case</p>
            <div className="grid grid-cols-1 gap-1">
                {caseTemplates.map((template) => (
                    <FormulaTemplate key={template.kbd} template={template} />
                ))}
            </div>

            <div className="divider mb-2 mt-0 opacity-70" />

            {/* Align Templates */}
            <p className="font-semibold">Align</p>
            <div className="grid grid-cols-1 gap-1">
                {alignTemplates.map((template) => (
                    <FormulaTemplate key={template.kbd} template={template} />
                ))}
            </div>

            <div className="divider mb-2 mt-0 opacity-70" />

            {/* Annotation Templates */}
            <p className="font-semibold">Annotation</p>
            <div className="grid grid-cols-2 gap-1">
                {annotationTemplates.map((template) => (
                    <FormulaTemplate key={template.kbd} template={template} />
                ))}
            </div>
        </>
    )
}

// SCにしたいが面倒なので保留
export const NavSidebar = () => (
    <div className="m-5 h-full w-full overflow-scroll rounded-xl bg-grad p-6 pl-10 text-primary-content shadow-grad">
        <h2 className="mb-2 text-center text-xl font-semibold">Templates</h2>
        <p className="mb-4 flex items-center justify-center text-xs">
            Press <span className="mx-2 rounded-md bg-slate-600 bg-opacity-15 px-1 py-0.5">Ctrl+Num</span> to Copy
        </p>

        <FormulaTemplates />
    </div>
)
