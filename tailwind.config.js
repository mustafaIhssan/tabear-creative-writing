const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			...colors,
		},
		extend: {
			lineClamp: {
				10: '10',
			},
			opacity: ['disabled'],
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp')],
	xwind: {
		mode: 'objectstyles',
	},
}
