const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: ['Poppins', 'sans-serif'],
        },
        colors: {
            ...defaultColors,
            'dark-grey': '#212121',
            'light-grey': '#EDEDED',
            primary: '#BFCAC5',
            medium: '#6A6A6A',
            brown: '#C6A48F',
            purple: '#9D9FD5',
            'light-green': '#78B194',
            'dark-green': '#6D7975',
            red: '#E32A6A',
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
