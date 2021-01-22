module.exports = {
	purge: [],
	theme: {
		extend: {
			lineClamp: {
				10: '10',
			},
			opacity: ['disabled'],
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp')],
}
