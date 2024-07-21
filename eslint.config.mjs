import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    {
        rules: {
            "no-unused-vars": [
                "off",
                {
                    vars: "all",
                    args: "after-used",
                    caughtErrors: "all",
                    ignoreRestSiblings: false,
                    reportUsedIgnorePattern: false,
                },
            ],
        },
    },
];
