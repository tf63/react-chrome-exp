import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'

export function Popup() {
    const a = [1, 2, 3]
    return (
        <div>
            {a.map((value) => (
                <div>{value}</div>
            ))}
            <h1 className="min-w-62 bg-emerald-400 p-5 text-xl font-semibold text-zinc-100">Popup 1</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
