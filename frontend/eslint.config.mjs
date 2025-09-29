import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
// Import the pluginSecurity
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  // base JS recommended rules
  js.configs.recommended,
  // project rules 
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },

    // register plugin under security 
    plugins: {
      security: pluginSecurity,
    },
    // use the recommended rules 
    rules: {
      ...(pluginSecurity.configs?.recommended?.rules ?? {}),
    },
  },

    {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
]);