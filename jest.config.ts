import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	}
}

export default config;