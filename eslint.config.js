
export default [
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    'rules': {
      // possible Errors
      'no-console': 'error',
      'no-debugger': 'error',
      'no-extra-parens': ['error', 'all', { 'nestedBinaryExpressions': false }],
      'no-extra-semi': 'error',
      'no-irregular-whitespace': 'error',
      'no-unsafe-negation': 'error',
      'valid-typeof': 'error',

      // best Practices
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always'],
      'no-alert': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-multi-spaces': ['error', { 'ignoreEOLComments': false }],
      'no-new-func': 'error',
      'no-param-reassign': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-return-assign': ['error', 'always'],
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-unused-expressions': ['error', { 'allowShortCircuit': false, 'allowTernary': false }],
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-void': 'error',
      'require-await': 'error',
      'yoda': ['error', 'never'],

      // variables
      'no-delete-var': 'error',
      'no-shadow': 'error',
      'no-undef': 'warn',
      'no-undef-init': 'error',
      'no-unused-vars':
        ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
      'no-use-before-define': ['error', { 'functions': false, 'classes': true }],

      // stylistic Issues
      'array-bracket-newline': ['error', 'consistent'],
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'camelcase': ['error', { 'properties': 'always' }],
      'comma-dangle': ['error', 'never'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'comma-style': ['error', 'last'],
      'eol-last': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'linebreak-style': ['error', 'unix'],
      'lines-between-class-members': ['error', 'always'],
      'max-len': ['error', { 'code': 100, 'ignoreUrls': true }],
      'new-cap': ['error', { 'newIsCap': true }],
      'no-array-constructor': 'error',
      'no-lonely-if': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-new-object': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
      'object-curly-newline': ['error', { 'consistent': true }],
      'object-curly-spacing': ['error', 'always'],
      'one-var': ['error', 'never'],
      'operator-linebreak': ['error', 'before'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'semi-spacing': ['error', { 'before': false, 'after': true }],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'spaced-comment': ['error', 'always', { 'exceptions': ['-'] }],

      // eCMAScript 6
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'constructor-super': 'error',
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-duplicate-imports': 'error',
      'no-new-symbol': 'error',
      'no-this-before-super': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': ['error', { 'allowNamedFunctions': false }],
      'prefer-const': ['error', { 'destructuring': 'all' }],
      'prefer-destructuring': [
        'error', {
          'array': true,
          'object': true
        }, {
          'enforceForRenamedProperties': false
        }
      ],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'template-curly-spacing': ['error', 'never'],
      'yield-star-spacing': ['error', 'both']
    }

  }
];
