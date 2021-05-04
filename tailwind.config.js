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
        },
        boxShadow: {
            oDefault: '0 3px 6px #5D5D5D29',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
