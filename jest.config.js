module.exports = {
    roots: ['<rootDir>'],
    preset: 'react-native',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/serviceWorker.ts', '!src/setupTests.ts', '!src/index.tsx'],
    setupFiles: ['./setup/jest/setupJest.ts', './setup/jest/setupEnzyme.ts', './node_modules/react-native-gesture-handler/jestSetup.js'],
    coveragePathIgnorePatterns: ['./src/*/*.types.{ts,tsx}'],
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
    coverageThreshold: {
        global: {
            statements: 50,
            branches: 50,
            lines: 50,
            functions: 50,
        },
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}', '<rootDir>/__tests__/*.test.{js,jsx,ts,tsx}'],
    automock: false,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
