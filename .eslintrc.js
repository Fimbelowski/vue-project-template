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
        "vue/component-tags-order": ["error", {
            "order": [
                "template",
                "script",
                "style"
            ]
        }],
        "vue/first-attribute-linebreak": ["error", {
            "singleline": "below",
            "multiline": "below"
          }],
        "vue/no-multiple-template-root": "off"
    }
}
 