/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	env: { browser: true, node: true, es2022: true },
	extends: ["@mgnsfr/eslint-config/svelte"],
	parserOptions: { sourceType: "module", ecmaVersion: "latest" },
	rules: {
		"unicorn/template-indent": ["warn", { indent: "\t" }],
	},
};
