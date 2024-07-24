import { crx, defineManifest } from '@crxjs/vite-plugin'
import { defineConfig, Plugin } from 'vite'
import path, { resolve } from 'path'
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

// https://github.com/vitejs/vite/issues/15012#issuecomment-1825035992
const warningsToIgnore = [
    ['SOURCEMAP_ERROR', "Can't resolve original location of error"],
    ['INVALID_ANNOTATION', 'contains an annotation that Rollup cannot interpret']
]
const muteWarningsPlugin = (warningsToIgnore: string[][]): Plugin => {
    const mutedMessages = new Set()
    return {
        name: 'mute-warnings',
        enforce: 'pre',
        config: (userConfig) => ({
            build: {
                rollupOptions: {
                    onwarn(warning, defaultHandler) {
                        if (warning.code) {
                            const muted = warningsToIgnore.find(
                                ([code, message]) => code == warning.code && warning.message.includes(message)
                            )

                            if (muted) {
                                mutedMessages.add(muted.join())
                                return
                            }
                        }

                        if (userConfig.build?.rollupOptions?.onwarn) {
                            userConfig.build.rollupOptions.onwarn(warning, defaultHandler)
                        } else {
                            defaultHandler(warning)
                        }
                    }
                }
            }
        }),
        closeBundle() {
            const diff = warningsToIgnore.filter((x) => !mutedMessages.has(x.join()))
            if (diff.length > 0) {
                this.warn('Some of your muted warnings never appeared during the build process:')
                diff.forEach((m) => this.warn(`- ${m.join(': ')}`))
            }
        }
    }
}

export default defineConfig({
    plugins: [react(), crx({ manifest }), muteWarningsPlugin(warningsToIgnore)],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                options: resolve(__dirname, 'options.html')
            }
        }
    }
})
