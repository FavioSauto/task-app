module.exports = {
  testMatch: ["**/__tests__/*.(spec|test).js"],
  transform: {
    "\\.[jt]sz?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy"
  }
}