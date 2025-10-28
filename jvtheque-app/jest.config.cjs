module.exports ={
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": ["babel-jest", { configFile: "./babel.config.test.js" }]
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/tests/setUpTest.js"],
  testPathIgnorePatterns: ["/node_modules/"]
};

