import { test, expect } from '@playwright/test';

test.describe('BrasilAPI - Performance', () => {

  test('Validar tempo de resposta da API', async ({ request }) => {
    const cep = '01001000';
    const startTime = Date.now();
    const response = await request.get(`/api/cep/v1/${cep}`);
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`Tempo de resposta: ${responseTime}ms`);
    expect(response.status()).toBe(200);
    expect(responseTime).toBeLessThan(2000);
  });

});