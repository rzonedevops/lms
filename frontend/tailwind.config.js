import frappeUIPreset from 'frappe-ui/src/tailwind/preset'
/* RegimA Zone Design System (rzonedevops/rzodesys) — used for brand font stacks */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	presets: [frappeUIPreset],
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'./node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}',
		'../node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}',
		'./node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}',
		'../node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			strokeWidth: {
				1.5: '1.5',
			},
			screens: {
				'2xl': '1600px',
				'3xl': '1920px',
			},
			/* RegimA Zone Design System (rzonedevops/rzodesys) — additive brand
			   extensions only; everything above is upstream. */
			colors: {
				'rz-navy': '#00082c',
				'rz-card': '#001236',
				'rz-surface': '#001a4a',
				'rz-accent': '#00245e',
				'rz-electric': '#0066cc',
				'rz-sky': '#00aaff',
				'rz-glow': '#4db8ff',
				'rz-royal': '#2b3c99',
			},
			fontFamily: {
				heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
				sans: ['Open Sans', 'Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
