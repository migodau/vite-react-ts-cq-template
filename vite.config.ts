import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ],
  },
  test: {
    environment: 'jsdom',
    reporters: ['default', 'junit'],
    outputFile: './coverage/junit.xml',
    setupFiles: ['./test/setup.ts'],
    globals: true,
    coverage: {
      reportOnFailure: false,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: ['**/*.spec.ts', '**/mocks', '**/*.mock.ts'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
});

