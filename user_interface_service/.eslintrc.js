module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "react/button-has-type": 0,
    "import/prefer-default-export": 0,
    "no-useless-constructor": 0,
    "no-empty-function": 0,
    "no-eval": 0,
    "no-param-reassign": 0,
    "no-useless-return": 0,
    "jsx-a11y/heading-has-content": 0,
  },
};
