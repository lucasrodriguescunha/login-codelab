import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                dark: {
                    10: 'var(--dark-color-10)',
                    20: 'var(--dark-color-20)',
                    30: 'var(--dark-color-30)',
                    40: 'var(--dark-color-40)',
                },
                white: 'var(--color-white)',
            },
            fontFamily: {
                'archivo': ['var(--font-archivo)', 'sans-serif'],
            },
            width: {
                '400': '400px',
            },
            height: {
                '528': '528px',
            },
        },
    },
    plugins: [],
}

export default config
