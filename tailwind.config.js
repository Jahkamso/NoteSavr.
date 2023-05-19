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
        extend: {
            gridTemplateColumns: {
                'notes-grid': 'repeat(auto-fill, 270px)',
            },
            colors: {
                'delete-color': '#E96479',
                'white': '#fff',
                'dark-white': '#eee',
                'header-color': '#159895', // #088395
                'p-color': '#ccc',
            },
        },
    },
    plugins: [],
}
