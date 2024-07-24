const config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                grad: 'linear-gradient(315deg, #DE94FF 0%, #A1B1FF 100%)'
            },
            boxShadow: {
                sm: '4px 10px 20px rgba(34, 26, 53, 0.05)',
                md: '4px 10px 20px rgba(34, 26, 53, 0.1)',
                lg: '4px 10px 20px rgba(34, 26, 53, 0.2)',
                dark: '4px 10px 20px rgba(34, 26, 53, 0.4)',
                grad: '8px 12px 15px rgba(219, 150, 255, 0.4)',
                primary: '1px 4px 15px rgba(219, 150, 255, 0.4)',
                secondary: '1px 4px 15px rgba(161, 177, 255, 0.4)',
                btn: '2px 4px 15px rgba(34, 26, 53, 0.2)'
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' }
                }
            },
            animation: {
                blink: 'blink 1s infinite'
            }
        }
    },
    plugins: [
        require('daisyui'),

        function ({ addUtilities }) {
            const newUtilities = {
                '.h-sidebar': {
                    height: 'calc(100vh - 2.5rem)'
                }
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    'base-100': '#ffffff',
                    'base-200': '#fcfcfc',
                    'base-300': '#e4e4e4',
                    'base-content': '#6c727e',
                    primary: '#DE94FF',
                    'primary-content': '#fcfcfc',
                    secondary: '#A1B1FF'
                }
            }
        ]
    }
}

module.exports = config
