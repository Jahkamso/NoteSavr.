/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        global: {
            colors: {
                icon: '#666666',
            },
        },
        screens: {
            mobile: '320px',
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px',
        },
        fontFamily: {
            McLaren: ['McLaren', 'cursive'],
        },
        colors: {
            white: '#fff',
            'dark-white': '#eee',
            'header-color': '#088395',
            'p-color': '#ccc',
        },
        extend: {
            gridTemplateColumns: {
                'notes-grid': 'repeat(auto-fill, 240px)',
            },
        },
    },
    plugins: [],
}