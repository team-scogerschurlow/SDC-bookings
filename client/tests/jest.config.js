module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['./client/src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/client/tests/enzyme.config.js'],
    //testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    //testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
}; 