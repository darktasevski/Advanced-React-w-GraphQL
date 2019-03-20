module.exports = {
	extends: ['airbnb', 'prettier', 'prettier/react'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			impliedStrict: true,
			classes: true,
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	rules: {
		'no-debugger': 0,
		'no-await-in-loop': 0,
		'no-return-assign': ['error', 'except-parens'],
		'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
		'no-unused-vars': [
			1,
			{
				ignoreSiblings: true,
				argsIgnorePattern: 'res|next|^err',
			},
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'arrow-body-style': [2, 'as-needed'],
		'no-unused-expressions': [
			2,
			{
				allowTaggedTemplates: true,
			},
		],
		'no-param-reassign': [
			2,
			{
				props: false,
			},
		],
		'no-console': 0,
		'import/prefer-default-export': 0,
		import: 0,
		'func-names': 0,
		'space-before-function-paren': 0,
		'import/extensions': 0,
		'no-underscore-dangle': 0,
		'consistent-return': 0,
		'react/display-name': 1,
		'react/react-in-jsx-scope': 0,
		'react/no-unescaped-entities': 0,
		'react/destructuring-assignment': 0,
		'jsx-a11y/accessible-emoji': 0,
		'react/require-default-props': 0,
		'react/prop-types': [1, { ignore: ['children', 'history'] }],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'no-shadow': [
			2,
			{
				hoist: 'all',
				allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
			},
		],
		quotes: [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'jsx-a11y/anchor-is-valid': [
			'warn',
			{
				aspects: ['invalidHref'],
			},
		],
	},
	plugins: ['prettier'],
};
