# 🧪 QA Technical Challenge - nstech

Este repositório contém a resolução do teste técnico para a vaga de Quality Assurance, contemplando cenários de teste, automação e descrição da abordagem técnica adotada.

---

## 📌 Objetivo

Demonstrar habilidades em:

- Escrita de cenários de teste (front-end e API)
- Aplicação de técnicas de QA
- Automação de testes
- Organização e boas práticas
- Clareza na tomada de decisão

---

## 🧱 Estrutura do Projeto

## 🧱 Estrutura do Projeto

````text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── evidence/
│   └── README.md
│
├── stage-1/
│   ├── api/
│   │   └── cenarios.md
│   └── ui/
│       └── cenarios.md
│
├── stage-2/
│   └── tests/
│       ├── api/
│       │   ├── cep.spec.js
│       │   ├── cnpj.spec.js
│       │   ├── performance.spec.js
│       │   └── data/
│       │       └── testData.js
│       │
│       └── ui/
│           ├── login.spec.js
│           ├── inventory.spec.js
│           ├── cart.spec.js
│           ├── checkout.spec.js
│           ├── pages/
│           │   ├── LoginPage.js
│           │   ├── InventoryPage.js
│           │   └── CheckoutPage.js
│           └── utils/
│               └── auth.js
│
├── stage-3/
│   └── abordagem.md
│
├── .gitignore
├── .prettierrc
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md

---

## ✅ Etapa 1 — Escrita de Cenários

Foram definidos cenários de teste para:

### 🔹 UI (SauceDemo)

- Login (válido, inválido, bloqueado)
- Carrinho (adicionar, remover, visualizar)
- Checkout (fluxo completo e validações)
- Ordenação de produtos

### 🔹 API (BrasilAPI)

- Consulta de CEP (válido, inválido, inexistente)
- Consulta de CNPJ (válido e inválido)
- Validação de estrutura de resposta
- Validação de tempo de resposta

### 🧠 Técnicas aplicadas

- Partição de equivalência
- Análise de valor limite
- Testes baseados em fluxo
- Testes negativos
- Validação de contrato (API)

---

## 🤖 Etapa 2 — Automação

### 🔹 UI

Automação utilizando **Playwright + JavaScript**

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

Automação utilizando **Playwright (API Testing)**

#### 📌 Cobertura

- ✅ Validação de status code
- ✅ Testes positivos e negativos
- ✅ Validação de contrato (estrutura JSON)
- ✅ Teste de performance (tempo de resposta)

#### 🧠 Boas práticas aplicadas

- Uso de `baseURL` no config
- Separação por domínio (`cep`, `cnpj`)
- Centralização de dados em `testData.js`
- Testes independentes e reutilizáveis

---

## 🔁 Integração Contínua (CI)

Foi configurada uma pipeline utilizando **GitHub Actions** para execução automatizada dos testes.

A pipeline é executada a cada push e realiza:

- Instalação de dependências
- Instalação dos browsers do Playwright
- Execução dos testes de front-end e API
- Geração de relatórios

Essa abordagem garante maior confiabilidade na execução e permite identificar falhas rapidamente em ambiente controlado.

---

## 📁 Evidências

As evidências de execução dos testes são geradas automaticamente pelo Playwright.

### 🔹 Execução local

Ao rodar os testes, são gerados:

- Screenshots em caso de falha
- Vídeos das execuções
- Trace para debugging

```bash
npx playwright test
npx playwright show-report

🔹 Execução em CI

Os resultados das execuções podem ser acessados na aba Actions do GitHub, incluindo:

Logs detalhados
Status da execução
Relatórios gerados

As evidências não foram versionadas no repositório para evitar arquivos pesados e manter o projeto leve.

🧠 Etapa 3 — Abordagem

Descrição da estratégia adotada durante o desenvolvimento, incluindo:

Critérios de escolha de ferramentas
Estruturação dos testes
Estratégia de cobertura
Decisões técnicas e trade-offs

📎 APIs e aplicações utilizadas
SauceDemo: https://www.saucedemo.com/
BrasilAPI: https://brasilapi.com.br/docs

▶️ Como executar os testes
Instalar dependências
npm install
Instalar browsers do Playwright
npx playwright install
Executar todos os testes
npx playwright test
Executar testes específicos
npx playwright test --grep "nome do cenário"

👩‍💻 Autora
Ana Paula Maroubo

````
