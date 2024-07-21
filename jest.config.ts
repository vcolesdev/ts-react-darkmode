/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  modulePathIgnorePatterns: ["dist/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  verbose: true,
};
