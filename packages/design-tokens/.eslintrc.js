module.exports = {
  extends: ['@britishlibrary/eslint-config'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
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
