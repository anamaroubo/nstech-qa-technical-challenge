import { test, expect } from '@playwright/test';
import { validCep, validCnpj } from './data/testData'; // Importando os dados reais

test.describe('BrasilAPI - Performance', () => {
  test('Validar tempo de resposta da API - CEP', async ({ request }) => {
    const startTime = Date.now();
    const response = await request.get(`/api/cep/v1/${validCep}`);
    const duration = Date.now() - startTime;

    console.log(`Tempo de resposta CEP: ${duration}ms`);
    expect(response.status()).toBe(200);
    expect(duration).toBeLessThan(2000);
  });

  test('Validar tempo de resposta da API - CNPJ', async ({ request }) => {
    const startTime = Date.now();
    const response = await request.get(`/api/cnpj/v1/${validCnpj}`);
    const duration = Date.now() - startTime;

    expect(response.status()).toBe(200);
    expect(duration).toBeLessThan(2000);
  });
});
