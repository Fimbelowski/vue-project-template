module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "vue/setup-compiler-macros": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "sort-imports": ["error"],
        "sort-keys": ["error", "asc", {
            "caseSensitive": true,
            "minKeys": 2,
            "natural": true
        }],
        "vue/component-tags-order": ["error", {
            "order": [
                "template",
                "script",
                "style"
            ]
        }],
        "vue/first-attribute-linebreak": ["error", {
            "multiline": "below",
            "singleline": "below"
          }],
        "vue/no-multiple-template-root": "off"
    }
}
 