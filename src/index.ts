
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    jasmine: true,
    protractor: true
  },
  plugins: [
    'jest',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import'
  ],
  settings: {
    react: {
      version: '16.8.0'
    }
  },
  overrides: [{
    files: ['**/*.spec.js', '**/*.spec.jsx'],
    env: {
      jest: true
    }
  }, {
    files: ['*.ts', '*.tsx'],
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
      '@typescript-eslint/key-spacing': 'error',
      '@typescript-eslint/prefer-for-of': 'off'
    }
  }],
  rules: {
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['warn', {
      allowAllCaps: true,
      ignore: []
    }],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/no-typos': 'error',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',

    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',

    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    complexity: 'off',
    'react/jsx-space-before-closing': 'off',
    indent: [
      'error',
      2,
      { SwitchCase: 1, ObjectExpression: 'first', ArrayExpression: 1 }
    ],
    'react/destructuring-assignment': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-equals-spacing': [2, 'never'],
    'react/style-prop-object': 'off',
    'react/jsx-handler-names': 'off',
    camelcase: 'warn',
    'max-params': 'off',
    'new-cap': 'off',
    'no-script-url': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
    'no-undef': 'error',
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      code: 150
    }],
    'react/jsx-no-bind': 0,
    'no-prototype-builtins': 'error',
    'no-param-reassign': 'error',
    'lodash/import-scope': 'off',
    'prettier/prettier': 'off',
    'import/newline-after-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-unresolved': 'off',
    'no-unused-expressions': 'off',
    'no-shadow': 'off', // use @typescript-eslint/no-shadow instead
    '@typescript-eslint/no-shadow': ['error'],
    'keyword-spacing': ['error', { before: true, after: true }],
    curly: ['error', 'all'],
    'space-before-blocks': ['error'],
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'no-throw-literal': 'off',
    'prefer-const': ['error'],
    'array-callback-return': 'error',
    'no-useless-concat': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'key-spacing': ['error'],
    'comma-spacing': 'error',
    'space-infix-ops': 'error',
    'no-multi-spaces': 'error',
    'react/self-closing-comp': 'error',
    'space-in-parens': 'error',
    'spaced-comment': [
      'error',
      'always',
      { markers: ['/'] }
    ],
    'no-case-declarations': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'comma-dangle': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-unneeded-ternary': 'error',
    'no-lone-blocks': 'off',
    'brace-style': [
      'error',
      '1tbs',
      {}
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'quote-props': ['error', 'as-needed'],
    eqeqeq: 'error',
    'no-dupe-class-members': 'error',
    'react/jsx-key': 'error',
    radix: 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-curly-brace-presence': 'off',
    'no-debugger': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always', afterOpening: 'never' }],
    'react/jsx-closing-bracket-location': 'error',
    'array-element-newline': ['error', { minItems: 3 }],
    'array-bracket-newline': ['error', { minItems: 3 }],
    'padded-blocks': ['error', 'never'],
    'newline-before-return': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['multiline-const', 'multiline-let'], next: '*' },
      { blankLine: 'never', prev: ['singleline-const', 'singleline-let'], next: ['singleline-const', 'singleline-let'] },
      { blankLine: 'always', prev: '*', next: 'block-like' }/* ,
      { "blankLine": "always", "prev": "*", "next": "switch" },
      { "blankLine": "always", "prev": "*", "next": "while" },
      { "blankLine": "always", "prev": "*", "next": "try" },
      { "blankLine": "always", "prev": "*", "next": "do" },
      { "blankLine": "always", "prev": "*", "next": "function" },
      { "blankLine": "always", "prev": "*", "next": "class" } */
    ],
    'arrow-spacing': 'error'
  },
  globals: {
    _: true,
    sled: true,
    JSX: true
  }
};
