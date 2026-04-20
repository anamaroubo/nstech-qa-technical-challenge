import { test, expect } from '@playwright/test';
import {
  validCep,
  invalidCep,
  nonexistentCep,
  specialCharCep,
  shortCep,
} from './data/testData';

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

  test('Consultar CEP com caracteres inválidos', async ({ request }) => {
    const response = await request.get(`/api/cep/v1/${specialCharCep}`);

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body).toHaveProperty('message');
    expect(body.message.toLowerCase()).toContain('cep');
  });

  test('Consultar CEP com tamanho inválido', async ({ request }) => {
    const response = await request.get(`/api/cep/v1/${shortCep}`);

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body).toHaveProperty('message');
    expect(body.message.toLowerCase()).toContain('cep');
  });

  test('Validar consistência de resposta para o mesmo CEP', async ({
    request,
  }) => {
    const firstResponse = await request.get(`/api/cep/v1/${validCep}`);
    const secondResponse = await request.get(`/api/cep/v1/${validCep}`);

    expect(firstResponse.status()).toBe(200);
    expect(secondResponse.status()).toBe(200);

    const firstBody = await firstResponse.json();
    const secondBody = await secondResponse.json();

    expect(firstBody).toMatchObject({
      cep: secondBody.cep,
      state: secondBody.state,
      city: secondBody.city,
      neighborhood: secondBody.neighborhood,
      street: secondBody.street,
    });
  });
});
