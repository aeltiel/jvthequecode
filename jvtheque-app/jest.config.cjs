module.exports ={
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/tests/setUpTest.js"],
  testPathIgnorePatterns: ["/node_modules/"]
};

