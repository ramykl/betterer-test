import {eslint} from "@betterer/eslint";

export default {
  // Add tests here ☀️
  'no more debuggers': () => eslint({ 'no-debugger': 'error' }).include('./src/**/*.ts'),
};
