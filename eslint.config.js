import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jquery from 'eslint-plugin-jquery';

export default [
  js.configs.recommended,
  {
    plugins: {
      jquery,
    },
    rules: {
      'jquery/no-class': 'warn',
      'jquery/no-ajax': 'warn',
    },
  },
  prettier,
];
