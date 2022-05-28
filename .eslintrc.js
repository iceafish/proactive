/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    './configs/eslint/base.eslintrc.json',
    './configs/eslint/warnings.eslintrc.json',
    './configs/eslint/errors.eslintrc.json',
    './configs/eslint/xss.eslintrc.json'
  ],
  ignorePatterns: [
    '**/{node_modules,lib}',
    'plugins'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json'
  }
};
