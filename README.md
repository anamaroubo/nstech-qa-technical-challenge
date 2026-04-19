
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
│   ├── front-end/
│   │   └── cenarios.md
│   └── api/
│       └── cenarios.md
│
├── etapa-2/
│   └── tests/
│       ├── front-end/
│       │   ├── login.spec.js
│       │   ├── cart.spec.js
│       │   ├── checkout.spec.js
│       │   ├── pages/
│       │   │   ├── LoginPage.js
│       │   │   ├── InventoryPage.js
│       │   │   └── CheckoutPage.js
│       │   └── utils/
│       │       └── auth.js
│       │
│       └── api/
│           ├── cep.spec.js
│           ├── cnpj.spec.js
│           ├── performance.spec.js
│           └── utils/
│               └── testData.js
│
├── etapa-3/
│   └── abordagem.md
│
├── playwright.config.js
├── package.json
└── README.md

---

## ✅ Etapa 1 — Escrita de Cenários

Foram definidos cenários de teste para:

🔹 Front-end (SauceDemo)
Login (válido, inválido, bloqueado)
Carrinho (adicionar, remover, visualizar)
Checkout (fluxo completo e validações)
Ordenação de produtos

🔹 API (BrasilAPI)
Consulta de CEP (válido, inválido, inexistente)
Consulta de CNPJ (válido e inválido)
Validação de estrutura de resposta
Validação de tempo de resposta

🧠 Técnicas aplicadas
Partição de equivalência
Análise de valor limite
Testes baseados em fluxo
Testes negativos
Validação de contrato (API)

---

🤖 Etapa 2 — Automação

🔹 Front-end

Automação utilizando Playwright + JavaScript

Page Object Model (POM)
Reutilização de login via helper
Separação por domínio (login, carrinho, checkout)
Uso de beforeEach para testes autenticados

🔹 API

Automação utilizando Playwright (API Testing)

Cobertura:
✅ Validação de status code
✅ Testes positivos e negativos
✅ Validação de contrato (estrutura JSON)
✅ Teste de performance (tempo de resposta)

Boas práticas aplicadas:
Uso de baseURL no config
Separação por domínio (cep, cnpj)
Centralização de dados em testData.js
Testes independentes e reutilizáveis

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

📁 Evidências disponíveis na pasta `/evidencias`

---

🧠 Etapa 3 — Abordagem

Nesta etapa será descrita a estratégia adotada, incluindo:

Critérios de escolha de ferramentas
Estruturação dos testes
Estratégia de cobertura
Decisões técnicas e trade-offs
---

📎 APIs e aplicações utilizadas
SauceDemo: https://www.saucedemo.com/
BrasilAPI: https://brasilapi.com.br/docs
---

## ▶️ Como executar os testes

### Instalar dependências

npm install

Instalar browsers do Playwright
npx playwright install

Executar todos os testes
npx playwright test

Executar testes específicos
npx playwright test --grep "nome do cenário"

👩‍💻 Autora
Ana Paula Maroubo