import React from 'react'
import ReactDOM from 'react-dom/client'

import { FormulaInput } from '@/components/formula-input'

import { ToastProvider } from '@/provider/ToastProvider'

import './index.css'

export const Popup = () => (
    <div className="h-screen bg-base-200 p-5">
        <FormulaInput inline={false} />
        <ToastProvider />
    </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
