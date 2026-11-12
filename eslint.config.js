/*
    Name: Caden
*/
"use strict";

import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  // JavaScript recommended configs
  js.configs.recommended,
  // Custom rules
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  // Keep this last so it overrides conflicting formatting rules.
  eslintConfigPrettier,
]);
