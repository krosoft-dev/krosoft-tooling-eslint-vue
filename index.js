import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import { createBaseConfig } from '@krosoft/tooling-eslint';

/**
 * @param {{ tsconfigRootDir: string, project?: string[] }} options
 * @returns {import("typescript-eslint").ConfigArray}
 */
export function createVueConfig(options) {
  return tseslint.config(
    ...createBaseConfig(options),
    ...pluginVue.configs['flat/recommended'],
    {
      files: ['**/*.{ts,vue}'],
      rules: {
        'vue/multi-word-component-names': 'warn',
        'vue/component-api-style': ['error', ['script-setup']],
        'vue/define-macros-order': 'error',
        'vue/no-unused-vars': 'error',
      },
    },
  );
}
