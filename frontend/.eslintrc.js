module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		tsconfigRootDir: __dirname
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
		mocha: true,
		jquery: true
	},
	globals: {
		Promise: true,
		React: true,
		beforeAll: true,
		afterAll: true,
		expect: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/typescript'
	],
	plugins: ['react', 'babel', 'react-hooks', 'prettier', '@typescript-eslint', 'import'],
	settings: {
		react: {
			pragma: 'React',
			version: '18.2.0'
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				project: `${__dirname}/tsconfig.json`
			}
		}
	},
	rules: {
		'import/no-unresolved': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-template-curly-in-string': 'error',
		'no-unsafe-negation': 'error',
		'valid-jsdoc': 'off',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-empty-function': 'warn',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'warn',
		'no-global-assign': 'error',
		'no-return-await': 'error',
		'no-implied-eval': 'error',
		'babel/no-invalid-this': 'warn',
		'no-lone-blocks': 'warn',
		'no-loop-func': 'warn',
		'no-magic-numbers': 'off',
		'no-multi-str': 'warn',
		'no-new-wrappers': 'error',
		'no-param-reassign': 'error',
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-concat': 'warn',
		'no-useless-escape': 'warn',
		'no-void': 'error',
		'no-with': 'error',
		radix: 'error',
		'vars-on-top': 'off',
		'no-console': 'error',
		yoda: 'warn',
		strict: ['error', 'safe'],
		'no-shadow-restricted-names': 'error',
		'no-undef-init': 'warn',
		'no-undef': 'off',
		'no-use-before-define': 'error',
		camelcase: 'off',
		'consistent-this': ['error', '_this'],
		'id-blacklist': 'off',
		'max-depth': ['warn', 4],
		'max-params': ['warn', 3],
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'babel/new-cap': 'error',
		'newline-after-var': 'warn',
		'newline-before-return': 'warn',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-new-object': 'error',
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: '@testing-library/react',
						importNames: ['fireEvent'],
						message: 'Please use @testing-library/user-event instead'
					}
				],
				patterns: ['*.component.svg']
			}
		],
		'no-self-assign': 'error',
		'no-unneeded-ternary': 'warn',
		'spaced-comment': ['error', 'always'],
		'constructor-super': 'error',
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-this-before-super': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-const': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'prefer-object-spread': 'error',
		'react/jsx-boolean-value': ['error', 'always'],
		'import/first': 'error',
		'import/dynamic-import-chunkname': 'error',
		'import/no-useless-path-segments': 'error',
		'import/no-duplicates': 'error',
		'import/named': 'error',
		'import/newline-after-import': 'error',
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: { order: 'asc' },
				groups: [['builtin', 'external'], 'internal', 'parent', ['sibling', 'index'], 'unknown'],
				pathGroups: [
					{
						pattern: '*.hbs',
						patternOptions: { matchBase: true },
						group: 'unknown',
						position: 'after'
					},
					{
						pattern: '*.+(less|css)',
						patternOptions: { matchBase: true },
						group: 'unknown',
						position: 'after'
					}
				]
			}
		]
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
			parser: '@typescript-eslint/parser',
			rules: {
				'no-unused-vars': 'off',
				'react/prop-types': 'off',
				'no-use-before-define': 'off',
				'no-redeclare': 'off',
				'@typescript-eslint/no-redeclare': ['error'],
				'@typescript-eslint/no-use-before-define': ['error'],
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						vars: 'all',
						args: 'after-used',
						ignoreRestSiblings: false
					}
				]
			}
		},
		{
			files: ['**/*.spec.*'],
			rules: {
				'import/dynamic-import-chunkname': 'off',
				'max-nested-callbacks': 'off'
			}
		}
	]
};
