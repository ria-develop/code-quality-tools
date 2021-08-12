// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  passWithNoTests: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: ['/node_modules/', '/build/', '/coverage/', '/dist/', '/bin/'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/**/tsconfig.test.json'
    }
  }
};
module.exports = config;
