import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  use: {
    channel: 'chrome',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://brasilapi.com.br',
  },
});
