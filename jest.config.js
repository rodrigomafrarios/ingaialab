/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {

	roots: ['<rootDir>/src'],
	
	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  
	// The directory where Jest should output its coverage files
	coverageDirectory: "coverage",
  
	// Indicates which provider should be used to instrument code for coverage
	coverageProvider: "v8",
  
	// The test environment that will be used for testing
	testEnvironment: "node",
	transform: {
	  '.+\\.ts$': 'ts-jest'
	},
	moduleNameMapper:{
		"@Presentation(.*)$": "<rootDir>/src/presentation$1",
		"@Data(.*)$": "<rootDir>/src/data$1",
		"@Domain(.*)$": "<rootDir>/src/domain$1",
		"@Infra(.*)$": "<rootDir>/src/infra$1",
		"@Main(.*)$": "<rootDir>/src/main$1",
		"@Utils(.*)$": "<rootDir>/src/utils$1",
	}
	
	// preset: '@shelf/jest-mongodb'
  
  };
  