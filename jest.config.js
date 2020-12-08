module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  testMatch: ['**/*.spec.js'],
  setupFilesAfterEnv: ['./scripts/test.config.js'],
  testEnvironment: 'jsdom', // the default w/ vue-test-utils is `jest-environment-jsdom-fifteen`, which breaks all tests
};
