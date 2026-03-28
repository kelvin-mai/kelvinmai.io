import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: [".source/**"] },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  {
    files: ["src/scripts/**"],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;
