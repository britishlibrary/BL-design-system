module.exports = {
  extends: ['@britishlibrary/eslint-config'],
  rules: {
    'import/extensions': [
      'error',
      {
        json: 'always',
      },
    ],
  },
}