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
            oBlack: '#212121',
            oLightGrey: '#5D5D5D29',
            oGrey: '#BFCAC5',
            brown: '#C6A48F',
            purple: '#9D9FD5',
            'light-green': '#78B194',
            'dark-green': '#6D7975',
            red: '#E32A6A',
        },
        boxShadow: {
            oDefault: '0 3px 6px #5D5D5D29',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
