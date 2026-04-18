import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    channel: 'chrome',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});
