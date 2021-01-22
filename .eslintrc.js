module.exports = {
	extends: ['plugin:@wordpress/eslint-plugin/recommended'],
	globals: {
		fetch: true,
	},
	env: {
		browser: true,
	},
	rules: {
		'dependency-group': 'off',
		'gutenberg-phase': 'off',
		'i18n-ellipsis': 'off',
		'i18n-no-collapsible-whitespace': 'off',
		'i18n-no-placeholders-only': 'off',
		'i18n-no-variables	': 'off',
		'i18n-text-domain': 'off',
		'i18n-translator-comments': 'off',
		'no-console': 'off',
		'no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
}
