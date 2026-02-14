import js from "@eslint/js";
import nextConfig from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";

const config = [
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "public/sw.js",
      "public/workbox-*.js",
      "src/lib/unmute.js",
    ],
  },
  ...nextConfig,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx,js,jsx}", "next.config.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      // Suppress new react-hooks@7 rules that flag established patterns:
      // - purity: Math.random() in useMemo([]) for stable-per-mount random values
      // - set-state-in-effect: setState in effects synchronizing external systems
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: ["next.config.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default config;
