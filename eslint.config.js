import pkg from "@eslint/js";

// @eslint/js is published as CommonJS; import the default and
// extract `configs` to be compatible with ESM `eslint.config.js`.
const { configs } = pkg;

// Minimal flat config for ESLint v9+. We use the recommended
// preset so `npm run lint` has a baseline configuration.
export default [
  configs.recommended,
  {
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: { ecmaVersion: "latest", sourceType: "module" },
  },
];
