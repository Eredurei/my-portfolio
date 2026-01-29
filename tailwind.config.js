module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: '#FFB800',
            },
            boxShadow: {
                'glowBrand': '0 4px 14px 0 rgb(255, 255, 255)',
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}
