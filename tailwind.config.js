module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
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
