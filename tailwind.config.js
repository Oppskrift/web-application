const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: ['Poppins', 'sans-serif'],
        },
        colors: {
            ...defaultColors,
            dark: '#212121',
            light: '#5D5D5D29',
            primary: '#BFCAC5',
        },
        boxShadow: {
            default: '0 3px 6px #5D5D5D29',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
