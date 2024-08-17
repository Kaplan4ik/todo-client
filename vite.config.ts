import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: [
      ...configDefaults.exclude,
      '**/.{husky}/**',
      '**/{build,coverage,scripts,ops}/**'
    ],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*'],
      exclude: []
    }
  },
  server: {
    port: 3000
  }
});
