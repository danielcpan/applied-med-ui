module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    'import/no-cycle': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  env: {
    browser: true,
    jest: true,
    es6: true
  }
};
