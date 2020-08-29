module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
  },
  rules: {
    'no-console': 1,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
      },
    ],
  }
}
