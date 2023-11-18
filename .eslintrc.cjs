module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        commonjs: true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": ['*.js', '*.jsx', '*.ts', '*.tsx'],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json',
    },
    "plugins": ['react', 'prettier', '@typescript-eslint'],
    "rules":  {
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
}
