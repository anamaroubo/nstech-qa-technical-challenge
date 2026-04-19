import { test, expect } from '@playwright/test';
import { validCep, invalidCep, nonexistentCep } from './utils/testData';

test.describe('BrasilAPI - CEP', () => {
  test('Consultar CEP válido', async ({ request }) => {
    const response = await request.get(`/api/cep/v1/${validCep}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('cep');
    expect(body).toHaveProperty('city');
    expect(body).toHaveProperty('state');
    expect(body).toHaveProperty('street');
  });

  test('Consultar CEP inexistente', async ({ request }) => {
    const response = await request.get(`/api/cep/v1/${nonexistentCep}`);

    expect(response.status()).toBe(404);

    const body = await response.json();

    expect(body).toHaveProperty('message');
    expect(body.message.toLowerCase()).toContain('erro');
  });

  test('Consultar CEP com formato inválido', async ({ request }) => {
    const response = await request.get(`/api/cep/v1/${invalidCep}`);

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body).toHaveProperty('message');
    expect(body.message.toLowerCase()).toContain('cep');
  });
});