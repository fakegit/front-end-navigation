module.exports = {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
  },
};
