module.exports = {
	plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-hooks', 'prettier'],
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'prettier/prettier': ['error'],
		camelcase: [0, { properties: 'never' }],
		'@typescript-eslint/camelcase': [0, { properties: 'never' }],
		'react/prop-types': [0],
		'@typescript-eslint/no-use-before-define': [0],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none'
				}
			}
		],
		'prefer-const': [0],
		'@typescript-eslint/prefer-const': [0, { destructuring: 'any' }],
		'@typescript-eslint/ban-ts-ignore': [0],
		'@typescript-eslint/explicit-function-return-type': [0],
		'@typescript-eslint/no-explicit-any': [0],
		'@typescript-eslint/explicit-module-boundary-types': [0],
		'@typescript-eslint/no-unused-expressions': [0],
		'@typescript-eslint/ban-ts-comment': [0],
		'@typescript-eslint/ban-types': [0],
		'@typescript-eslint/no-empty-function': [0],
		'@typescript-eslint/no-unused-vars': [0],
		'@typescript-eslint/no-non-null-assertion': [0],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn'
	},
	overrides: [
		{
			files: ['**/*.tsx', '**/*.ts'],
			rules: {
				'no-unused-expressions': 'off'
			}
		}
	],
	settings: {
		react: {
			version: 'detect'
		}
	}
}
