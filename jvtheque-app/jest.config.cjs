module.exports ={
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": ["babel-jest", { configFile: "./babel.config.test.cjs" }]
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/tests/setUpTest.js"],
  testPathIgnorePatterns: ["/node_modules/"]
};

