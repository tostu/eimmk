/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#D9AB73',
				secondary: '#D9C8B4',
				accent: '#A6785D',
				bright: '#F2F2F2',
				dark: '#202020'
			},
			fontFamily: {
				yamafont: 'yamafont, ui-serif' // Adds a new `font-display` class
			}
		}
	},
	plugins: []
};
