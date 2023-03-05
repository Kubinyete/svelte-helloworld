/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js}"],
  theme: {
    extend: {
        keyframes: {
            appear: {
                '0%': {
                    transform: 'translateY(20%)',
                    opacity: .2,
                },
                '100%': {
                    transform: 'translateY(0%)',
                    opacity: 1
                }
            }
        },
        animation: {
            appear: 'appear 200ms ease-out'
        }
    },
  },
  plugins: [],
}
