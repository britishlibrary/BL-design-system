module.exports = {
  extends: ['@britishlibrary/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/extensions': [
      'error',
      {
        json: 'always',
      },
    ],
  },
}
