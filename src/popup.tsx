import React, { ChangeEvent, useRef, useState } from 'react'
import { useColor } from 'react-color-palette'
import ReactDOM from 'react-dom/client'

import { useDOMtoImage } from '@/hooks/use-dom-to-image'

import { ColorPicker } from '@/components/color-picker'
import { FontSizeDropdown } from '@/components/font-size-dropdown'
import { Formula } from '@/components/formula'

import { ToastProvider } from '@/provider/ToastProvider'

import './index.css'

export const Popup = () => {
    const inline = false
    const [formula, setFormula] = useState<string>('')
    const [color, setColor] = useColor('#000000FF')
    const [fontSize, setFontSize] = useState<string>('16px')

    const elementRef = useRef<HTMLDivElement>(null)

    const { downloadImage, copyImage } = useDOMtoImage(elementRef)

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setFormula(value)
    }

    return (
        <div className="h-screen bg-base-200 p-5">
            <div className="card mx-auto mb-12 mt-6 max-w-[900px] bg-base-100 p-8 pb-10 shadow-md">
                <p className="font-bold">Katex Block</p>
                <div className="w-full">
                    <div className="mx-20 overflow-hidden border-b-2 py-2">
                        <Formula formula={formula} inline={inline} />
                    </div>
                    <textarea
                        value={formula}
                        onChange={onChange}
                        spellCheck={false}
                        className="textarea textarea-bordered mx-auto mb-7 mt-10 h-40 w-full 2xl:h-80"
                        placeholder="Input formula..."
                    />

                    <div className="flex flex-wrap gap-5 space-y-0">
                        <button
                            className="btn btn-primary shadow-primary outline-none"
                            onClick={downloadImage}
                            tabIndex={-1}
                        >
                            Download as Image
                        </button>
                        <button
                            className="btn btn-secondary shadow-secondary outline-none"
                            onClick={copyImage}
                            tabIndex={-1}
                        >
                            Copy as Image
                        </button>
                        <ColorPicker color={color} setColor={setColor} />
                        <FontSizeDropdown fontSize={fontSize} setFontSize={setFontSize} />
                    </div>
                </div>
            </div>
            <ToastProvider />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
