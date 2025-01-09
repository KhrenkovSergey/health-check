import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,  // Сохраняем поддержку глобальных переменных для браузера
        jest: true,           // Указываем глобальную переменную jest для тестов
        test: true,           // Указываем глобальную переменную test для Jest
        expect: true,         // Указываем глобальную переменную expect для Jest
      },
    },
    plugins: {
      jest: jestPlugin,         // Подключаем плагин Jest как объект
    },
    rules: {
      // Рекомендуемые правила для JavaScript
      ...pluginJs.configs.recommended.rules,

      // Рекомендуемые правила для Jest
      'jest/no-disabled-tests': 'warn',   // Пример добавления правила из плагина jest
      'jest/no-focused-tests': 'error',   // Пример добавления правила из плагина jest
      'jest/prefer-to-have-length': 'warn', // Пример добавления правила из плагина jest
      'jest/valid-expect': 'error',       // Пример добавления правила из плагина jest
    },
  },
];
