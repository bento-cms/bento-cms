// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: {
//     // Handle module aliases (this will be automatically configured for you soon)
//     '^@/components/(.*)$': '<rootDir>/src/components/$1',
//     '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
//     '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
//   },
//   transform: {
//     // Use `ts-jest` to transpile tests
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
//   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
//   collectCoverageFrom: [
//     'src/**/*.{ts,tsx}',
//     '!src/**/*.d.ts',
//     '!src/pages/_app.tsx',
//     '!src/pages/_document.tsx',
//   ],
//   moduleDirectories: ['node_modules', '<rootDir>/'],
// };

import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
