import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    headless: isCI ? true : false,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://brasilapi.com.br',
    ...(isCI ? {} : { channel: 'chrome' }),
  },
});
