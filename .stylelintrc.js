module.exports = {
	extends: ['@wordpress/stylelint-config/scss'],
	plugins: ['stylelint-order'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['mixin', 'define-mixin', 'include'],
			},
		],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['mixin', 'define-mixin', 'include'],
			},
		],
		'no-descending-specificity': null,
		'order/properties-alphabetical-order': true,
		'scss/selector-no-redundant-nesting-selector': null,
		'selector-class-pattern': null,
		'max-line-length': null,
		'function-url-quotes': null,
	},
};
