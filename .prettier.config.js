// config borrowed from: https://gist.github.com/karpolan/2c573b5767bc9b65db9936c7fad4daac
/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,

  // Plugins
  plugins: ["@trivago/prettier-plugin-sort-imports"],

  // Overrides
  overrides: [
    {
      files: ["*.ts"],
      options: { parser: "babel-ts" },
    },
  ],
};

export default config;
