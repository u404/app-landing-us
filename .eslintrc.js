module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      "error",
      "never"
    ],
    "space-before-function-paren": 0,
    "node/no-deprecated-api": "off",
    "no-extra-semi": "off",
    "no-extend-native": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
