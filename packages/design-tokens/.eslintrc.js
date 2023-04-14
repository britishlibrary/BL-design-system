module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    '@typescript-eslint/parser',
    '@britishlibrary/eslint-config'
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        json: 'always',
      },
    ],
  },
}