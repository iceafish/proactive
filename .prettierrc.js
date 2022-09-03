'use strict';

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 95,
  parser: 'typescript',
  tabWidth: 2,
  trailingComma: 'all',
  semi: true,
  importOrder: [
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@common/(.*)$',
    '^@component/(.*)$',
    '^@shared/(.*)$',
    '^@protocol/(.*)$',
    '^@vinci/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'classProperties', 'decorators-legacy'],
};
