/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            '1441': '1441px'
        },
        colors: {
            'color1': '#111b21',
            'color2': '#1f2c33',
            'color3': '#aebac1',
            'color4': '#101a20',
            'icon': '#8696a0'
        },
        fontFamily: {
            sans: ['Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
