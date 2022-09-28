/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'color1': '#111b21',
            'color2': '#1f2c33'
        },
        fontFamily: {
            sans: ['Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
