# Etapa 3 — Descrição da Abordagem Adotada

## Abordagem geral

A execução do teste foi conduzida de forma incremental, com foco inicial na compreensão do comportamento esperado das aplicações e, posteriormente, na construção de uma automação estruturada, legível e sustentável.

Na Etapa 1, priorizei a definição de cenários que cobrissem os fluxos mais relevantes, contemplando tanto caminhos positivos quanto negativos. Para a UI, foquei na jornada principal do usuário no SauceDemo, incluindo autenticação, manipulação de carrinho, checkout e ordenação de produtos. Para a API, foquei na validação funcional, tratamento de entradas inválidas, estrutura das respostas e tempo de resposta.

Na Etapa 2, a estratégia foi automatizar os cenários de forma progressiva. Inicialmente, validei o funcionamento básico dos testes e, em seguida, evoluí a estrutura com foco em manutenção e escalabilidade. Optei por não começar com uma arquitetura complexa, priorizando estabilidade e clareza antes de aplicar boas práticas como Page Object Model, centralização de dados e uso de `baseURL`.

---

## Estratégia de cobertura

Além dos fluxos principais, a cobertura foi orientada por cenários que representam maior risco para o negócio e para a experiência do usuário.

Foram priorizados testes relacionados a:

- Controle de acesso a áreas autenticadas (acesso direto sem login)
- Validação de sessão (persistência após refresh e invalidação após logout)
- Comportamentos de borda (como início de checkout com carrinho vazio)
- Validação de entradas inválidas na API (formato, tamanho e caracteres)
- Consistência e confiabilidade dos dados retornados
- Tempo de resposta das requisições

Essa abordagem buscou equilibrar cobertura funcional com testes que agregam valor real na identificação de riscos, evitando cenários redundantes ou de baixo impacto.

---

## Escolha das técnicas de teste

Para a UI, utilizei principalmente testes baseados em fluxo do usuário, partição de equivalência e análise de valor limite. Essas técnicas foram escolhidas por se adequarem ao contexto de uma aplicação centrada em interação e navegação, permitindo validar tanto os principais caminhos quanto cenários de erro, como credenciais inválidas, usuário bloqueado e ausência de preenchimento de campos obrigatórios.

Para a API, utilizei partição de equivalência, testes negativos e validação de contrato. A partição foi aplicada na separação entre dados válidos, inválidos e inexistentes. A validação de contrato garantiu a estrutura esperada das respostas, especialmente no endpoint de CEP. Também incluí testes de performance e consistência de resposta, ampliando a visão de qualidade além do comportamento funcional.

---

## Escolha das ferramentas

Optei por utilizar Playwright com JavaScript tanto para UI quanto para API.

Na UI, a escolha do Playwright se deve à sua robustez para testes end-to-end, estabilidade, boa experiência de debug e recursos nativos como screenshots, vídeos e trace.

Para API, optei por manter a mesma ferramenta, aproveitando a capacidade de realizar requisições HTTP diretamente. Essa decisão reduziu a complexidade da stack, manteve consistência no projeto e facilitou a manutenção.

O uso de JavaScript foi natural pela integração com o Playwright e pela simplicidade e legibilidade na implementação dos testes.

---

## Critérios que guiaram minhas decisões

Durante a execução, os principais critérios considerados foram:

- **Cobertura relevante:** foco em cenários críticos e de maior impacto
- **Clareza e organização:** separação por domínio para facilitar leitura e manutenção
- **Escalabilidade:** evolução gradual da estrutura com foco em sustentabilidade
- **Reaproveitamento:** uso de helpers, `beforeEach`, `baseURL` e centralização de dados
- **Confiabilidade:** preferência por validações menos frágeis e menos acopladas
- **Aderência ao contexto:** escolha de técnicas compatíveis com cada tipo de teste

---

## Decisões de arquitetura

Na UI, organizei os testes por feature (`login`, `inventory`, `cart` e `checkout`) e apliquei o padrão Page Object Model para desacoplar a lógica de interação da lógica de validação. Isso tornou os testes mais legíveis, reutilizáveis e menos sensíveis a mudanças na interface.

Na API, organizei os testes por domínio (`cep`, `cnpj` e `performance`) e centralizei os dados de teste em um arquivo específico, facilitando manutenção e entendimento.

Também implementei uma pipeline no GitHub Actions para execução automatizada dos testes, garantindo consistência das execuções e maior confiabilidade da entrega.

---

## Pontos de atenção identificados

Durante a execução dos testes, foi identificado que a aplicação permite iniciar o fluxo de checkout mesmo quando o carrinho está vazio.

Embora esse comportamento não gere erro técnico, ele pode impactar negativamente a experiência do usuário, permitindo que o fluxo de compra seja iniciado sem a existência de itens.

Como oportunidade de melhoria, recomenda-se:

- Validar a presença de itens no carrinho antes de permitir o início do checkout
- Ou apresentar uma mensagem informativa ao usuário

Essa análise evidencia a importância de alinhar regras de negócio com o comportamento da interface.

---

## Considerações finais

A abordagem adotada buscou equilibrar cobertura, organização e pragmatismo. Mais do que automatizar cenários, a preocupação foi estruturar a solução de forma que ela seja legível, sustentável e preparada para evolução.

O processo seguiu uma lógica incremental: validar primeiro os fluxos essenciais, estabilizar os testes e, em seguida, evoluir a arquitetura com boas práticas. Essa forma de trabalho reflete minha atuação prática em QA, com foco não apenas na execução de testes, mas na construção de qualidade de forma contínua e estratégica.
