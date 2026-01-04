import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
  },
});
