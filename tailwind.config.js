const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			amber: colors.amber,
			emerald: colors.emerald,
			teal: colors.teal
		},
		container: {
			center: true,
			padding: '2rem',
		}
	},
	variants: {
		extend: {},
	},
	plugins: ['@tailwindcss/forms'],
}
