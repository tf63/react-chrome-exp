import { crx, defineManifest } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc' // crxjs does not support react-swc yet
import react from '@vitejs/plugin-react'

const manifest = defineManifest({
    manifest_version: 3,
    name: 'React Extension Exp',
    version: '1.0.0',
    permissions: [],
    action: {
        default_popup: 'index.html'
    },
    options_page: 'options.html',
    commands: {
        _execute_action: {
            suggested_key: {
                default: 'Ctrl+Shift+Y'
            }
        }
    }
})

export default defineConfig({
    plugins: [react(), crx({ manifest })]
})
