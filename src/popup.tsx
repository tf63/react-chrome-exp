import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'

import { FormulaInput } from '@/components/formula-input'

import { ToastProvider } from '@/provider/ToastProvider'

export const Popup = () => (
    <div className="w-screen max-w-[800px] p-5">
        <FormulaInput inline={false} />
        <ToastProvider />
    </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
