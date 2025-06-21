import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://google.com'
  },

  projects: [
    { name: 'Setup', testDir: 'src/setup', testMatch: '*.setup.ts' },
    {
      name: 'Main',
      testDir: 'src/tests/main',
      testMatch: '*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'Chrome',
        trace: 'on-first-retry',
        viewport: { width: 1710, height: 1107 }
      },
      retries: 1
    }
  ]
});
