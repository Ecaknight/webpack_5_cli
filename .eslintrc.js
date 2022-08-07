// eslint 配置
module.exports = {
    extends: ["eslint:recommended"],
    env: {
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 6, // es6
        sourceType: "module",
    },
    rules: {
        'no-var': 2
    }
}