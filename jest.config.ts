import type { Config } from 'jest';

const config: Config = {
    extensionsToTreatAsEsm: ['.ts'],
    testEnvironment: 'node',
    testMatch: ['**/tests/** /*.test.ts'],
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            { useESM: true, tsconfig: 'tsconfig.json' }
        ]
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};

export default config;