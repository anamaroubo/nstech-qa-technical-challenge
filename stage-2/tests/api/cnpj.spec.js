import { test, expect } from '@playwright/test';
import { validCnpj, invalidCnpj, maskedCnpj } from './data/testData';

test.describe('BrasilAPI - CNPJ', () => {
  test('Consultar CNPJ válido', async ({ request }) => {
    const response = await request.get(`/api/cnpj/v1/${validCnpj}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('cnpj');
    expect(body).toHaveProperty('razao_social');
    expect(body).toHaveProperty('nome_fantasia');
    expect(body).toHaveProperty('municipio');
    expect(body).toHaveProperty('uf');
  });

  test('Consultar CNPJ inválido', async ({ request }) => {
    const response = await request.get(`/api/cnpj/v1/${invalidCnpj}`);

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body).toHaveProperty('message');
    expect(body.message.toLowerCase()).toContain('cnpj');
  });

  test('Consultar CNPJ com máscara', async ({ request }) => {
    const response = await request.get(`/api/cnpj/v1/${maskedCnpj}`);

    expect(response.status()).toBe(404);

    const responseText = await response.text();
    expect(responseText).toContain('<!DOCTYPE');
  });
});
