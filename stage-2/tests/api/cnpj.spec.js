import { test, expect } from '@playwright/test';
import { validCnpj, invalidCnpj, maskedCnpj } from './data/testData';

test.describe('BrasilAPI - CNPJ', () => {
  test('Consultar CNPJ válido (apenas números)', async ({ request }) => {
    const response = await request.get(`/api/cnpj/v1/${validCnpj}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('cnpj', validCnpj);
    expect(body).toHaveProperty('razao_social');
  });

  test('Consultar CNPJ com máscara', async ({ request }) => {
    const response = await request.get(`/api/cnpj/v1/${maskedCnpj}`);

    expect(response.status()).toBe(404);
  });

  test('Consultar CNPJ inválido/malformado', async ({ request }) => {
    const response = await request.get(`/api/cnpj/v1/${invalidCnpj}`);

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body).toHaveProperty('message');
    expect(body.message).toContain('CNPJ');
  });

  test('Validar campos essenciais do retorno de CNPJ', async ({ request }) => {
    const response = await request.get(`/api/cnpj/v1/${validCnpj}`);
    const body = await response.json();

    const requiredFields = [
      'nome_fantasia',
      'cnae_fiscal',
      'logradouro',
      'numero',
      'bairro',
      'uf',
    ];

    for (const field of requiredFields) {
      expect(body).toHaveProperty(field);
    }
  });
});
