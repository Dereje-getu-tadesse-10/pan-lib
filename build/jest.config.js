"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    verbose: true,
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};
exports.default = config;
