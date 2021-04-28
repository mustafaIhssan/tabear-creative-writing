module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	plugins: ['@typescript-eslint', 'simple-import-sort'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		'plugin:security/recommended',
		'plugin:react-hooks/recommended',
	],
	rules: {
		'unicorn/no-null': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'unicorn/consistent-function-scoping': 'off',
		'no-console': 'warn',
		'react/react-in-jsx-scope': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'react/prop-types': 'off',
		'unicorn/filename-case': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
}
