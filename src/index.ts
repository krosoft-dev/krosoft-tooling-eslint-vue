import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import { createBaseConfig } from "@krosoft/tooling-eslint";

interface VueConfigOptions {
  tsconfigRootDir: string;
  project?: string[];
}

export function createVueConfig(
  options: VueConfigOptions,
): ReturnType<typeof tseslint.config> {
  return tseslint.config(
    ...createBaseConfig(options),
    ...pluginVue.configs["flat/recommended"],
    {
      files: ["**/*.{ts,vue}"],
      rules: {
        "vue/multi-word-component-names": "warn",
        "vue/component-api-style": ["error", ["script-setup"]],
        "vue/define-macros-order": "error",
        "vue/no-unused-vars": "error",
      },
    },
  );
}
