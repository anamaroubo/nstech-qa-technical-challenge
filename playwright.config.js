import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './stage-2/tests', // Garante que o Playwright ache seus testes na pasta certa
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    // Configuração para API
    baseURL: 'https://brasilapi.com.br',

    // Configurações de UI
    headless: isCI,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
