/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                neon: {
                    pink: '#ff006e',
                    blue: '#3a86ff',
                    purple: '#8338ec',
                    cyan: '#06ffb4',
                },
                dark: '#0f0f1b',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { textShadow: '0 0 10px #ff006e' },
                    '100%': { textShadow: '0 0 30px #ff006e, 0 0 40px #ff006e' },
                }
            }
        },
    },
    plugins: [],
}