
# 🧪 QA Technical Challenge - nstech

Este repositório contém a resolução do teste técnico para a vaga de Quality Assurance, contemplando cenários de teste, automação e descrição da abordagem técnica adotada.

---

## 📌 Objetivo

Demonstrar habilidades em:

- Escrita de cenários de teste (front-end e API)
- Aplicação de técnicas de QA
- Automação de testes
- Organização e documentação técnica
- Clareza na tomada de decisão

---

## 🧱 Estrutura do Projeto
.
├── etapa-1/
│ ├── front-end/
│ │ └── cenarios.md
│ └── api/
│ └── cenarios.md
│
├── etapa-2/
│ ├── front-end/
│ │ ├── login.spec.js
│ │ ├── inventory.spec.js
│ │ ├── cart.spec.js
│ │ ├── checkout.spec.js
│ │ ├── pages/
│ │ └── utils/
│ └── api/
│
├── etapa-3/
│ └── abordagem.md
│
└── evidencias/
├── front-end/
└── api/

---

## ✅ Etapa 1 — Escrita de Cenários

Nesta etapa foram elaborados cenários de teste para dois contextos distintos:

### 🔹 Front-end
Aplicação: SauceDemo (e-commerce de testes)

- Validação de fluxos principais (login, navegação, carrinho e checkout)
- Testes positivos e negativos
- Validação de comportamento da interface

### 🔹 API
Aplicação: BrasilAPI

- Validação de endpoints públicos
- Testes de contrato (estrutura de resposta)
- Validação de status code e dados retornados

### 🧠 Técnicas aplicadas

- Partição de equivalência
- Análise de valor limite
- Testes baseados em fluxo do usuário
- Validação de contrato (API)

---

## 🤖 Etapa 2 — Automação

Automação dos cenários definidos na etapa 1.

### 🔹 Front-end

A automação foi desenvolvida utilizando **Playwright**, com foco em boas práticas de organização e manutenção.

#### 🧩 Arquitetura adotada

- Separação dos testes por feature:
  - `login.spec.js`
  - `inventory.spec.js`
  - `cart.spec.js`
  - `checkout.spec.js`

- Utilização do padrão **Page Object Model (POM)**:
  - `LoginPage`
  - `InventoryPage`
  - `CheckoutPage`

- Reaproveitamento de código:
  - Função de login centralizada (`utils/auth`)
  - Uso de `beforeEach` para cenários autenticados

#### 🎯 Benefícios da abordagem

- Melhor legibilidade dos testes
- Redução de duplicação de código
- Facilidade de manutenção
- Escalabilidade para novos cenários

---

### 🔹 API

- Testes automatizados de endpoints
- Validação de status code
- Validação de estrutura e dados da resposta

📁 Evidências disponíveis na pasta `/evidencias`

---

## 🧠 Etapa 3 — Abordagem

Descrição da estratégia adotada ao longo do teste:

- Critérios de escolha de ferramentas
- Técnicas de teste utilizadas
- Decisões técnicas e trade-offs

---

## 🚀 Tecnologias utilizadas

- **Playwright** — automação de testes end-to-end (UI)
- **JavaScript (Node.js)** — linguagem base
- **BrasilAPI** — API pública para testes

---

## ▶️ Como executar os testes

### Instalar dependências
```bash
npm install
Instalar browsers do Playwright
npx playwright install
Executar todos os testes
npx playwright test
Executar testes específicos
npx playwright test --grep "nome do cenário"

📎 Links utilizados
SauceDemo: https://www.saucedemo.com/
BrasilAPI: https://brasilapi.com.br/docs

👩‍💻 Autora
Ana Paula Maroubo