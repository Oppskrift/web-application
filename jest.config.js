module.exports = {
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.vue$': 'vue-jest',
    },
    collectCoverageFrom: ['src/components/**/*.vue', 'src/pages/**/*.vue'],
    coveragePathIgnorePatterns: ['/src/.*/.*stories.ts$/'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
};
