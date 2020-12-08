module.exports = {
  extends: ['plugin:vue/strongly-recommended'],
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 2018, // ES6 + spread
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'curly': ['error', 'all'] ,
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'keyword-spacing': [1],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', { 'blocks': 'never' }],
    'padding-line-between-statements': ['warn',
      // vars
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      // members in a block
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
      ignores: ['/^g-'],
    }],
    'vue/script-indent': ['warn', 2, {
      baseIndent: 1,
    }],
    'vue/html-self-closing': ['warn', {
      html: { void: 'always', normal: 'never', component: 'always' },
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: { max: 1, allowFirstLine: false },
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      allowEmptyLines: true,
    }],
    // 'vue/attribute-hyphenation': ///
  },

  overrides: [{
    'files': ['*.vue'],
    'rules': {
      'indent': 'off',
      'vue/name-property-casing': 'off',
      'vue/singleline-html-element-content-newline': 'off'
    },
  }]
};
