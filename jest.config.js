module.exports = {
  testPathIgnorePatterns: [
    '/node_modules',
  ],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.ts': 'ts-jest',
  },
};
