# 🧪 QA Technical Challenge - nstech

Este repositório contém a resolução do desafio técnico para a vaga de Quality Assurance, contemplando cenários de teste, automação estruturada e a descrição da abordagem estratégica adotada.

---

## 📌 Objetivo

Demonstrar competências em:

- Escrita de cenários de teste (Gherkin/BDD).
- Aplicação de técnicas de QA (Partição de Equivalência, Valor Limite e Contrato).
- Automação de testes de UI e API com Playwright.
- Organização de arquitetura (POM) e boas práticas de código.
- Configuração de CI/CD com Github Actions.

---

## 🧱 Estrutura do Projeto

```text
.
├── .github/workflows/ # Configuração da Pipeline (CI)
├── evidence/ # Documentação sobre evidências
├── stage-1/ # Planejamento
│ ├── api/cenarios.md # 5 cenários CEP, 4 CNPJ, Performance
│ └── ui/cenarios.md # Fluxos SauceDemo
├── stage-2/ # Automação
│ └── tests/
│ ├── api/ # Testes de API (CEP, CNPJ, Performance)
│ │ └── data/ # Massa de dados (testData.js)
│ └── ui/ # Testes de UI (Login, Inventory, Cart, Checkout)
│ ├── pages/ # Page Object Model (POM)
│ └── utils/ # Helpers (auth.js)
├── stage-3/ # Documentação Técnica
│ └── abordagem.md # Estratégia e tomada de decisão
├── playwright.config.js # Configurações globais (BaseURL, Retries)
└── README.md # Guia do projeto
```

---

## ✅ Etapa 1 — Cenários de Teste

Planejamento detalhado utilizando técnicas de QA para garantir cobertura técnica e de negócio:

- UI: Fluxos de autenticação, segurança de rotas, persistência de sessão, manipulação de carrinho (adicionar/remover) e checkout completo.

- API: Validações de status code, mensagens de erro (400/404), validação de contrato JSON e performance de resposta.

---

## 🤖 Etapa 2 — Automação

### 🔹 UI (Playwright + JavaScript)

#### 🧩 Arquitetura adotada

- Arquitetura POM: Implementação do Page Object Model para desacoplar a lógica de automação da estrutura da página.

- Manutenibilidade: Uso de beforeEach para otimizar fluxos que exigem login prévio e centralização de seletores.

- Resiliência: Validações de URL e estado da UI após interações (como refresh e ordenação).

### 🔹 API (Playwright API Testing)

- Independência: Testes atômicos que não dependem de estados de outros testes.
- Performance: Validação de SLA de resposta inferior a 2 segundos.
- Contrato: Verificação rigorosa da estrutura de dados retornada pela BrasilAPI.

---

## 🔁 Integração Contínua (CI)

Pipeline configurada via GitHub Actions (playwright.yml).

- Execução automatizada a cada `push`.
- Instalação de ambiente, browsers e execução de todos os testes (UI e API).
- Armazenamento de relatórios e evidências em caso de falha.

---

## 📁 Evidências de Execução

As evidências são geradas automaticamente pelo framework:

Local: npx playwright show-report para visualizar vídeos, screenshots e traces.

CI: Disponíveis no artefato da execução na aba Actions do GitHub.

### ▶️ Como executar os testes

1. Instalar browswes do Playwright:

```bash
npm install
```

2. Instalar browswes do Playwright:

```bash
npx playwright install
```

3. Executar todos os testes (Modo Headless - padrão CI):

```bash
npx playwright test
```

4. Executar apenas testes de UI e API:

```bash
npx playwright test stage-2/tests/ui
npx playwright test stage-2/tests/api
```

5. Executar com a Interface Visual (UI Mode - Recomendado para debug):

```bash
npx playwright test --ui
```

👩‍💻 Autora
Ana Paula Maroubo

```

```
