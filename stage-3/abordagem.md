# Etapa 3 — Descrição da Abordagem Adotada

## Abordagem geral

A execução do teste foi conduzida de forma incremental, focando primeiro na compreensão do comportamento das aplicações e, posteriormente, na construção de uma automação estruturada, legível e sustentável.

Na Etapa 1, priorizei cenários que cobrissem os fluxos de maior valor. Para a UI, foquei na jornada de compra do SauceDemo (autenticação, carrinho, checkout e ordenação). Para a API, foquei na validação funcional, tratamento de erros (400/404), estrutura de contratos e performance.

Na Etapa 2, a estratégia foi automação progressiva. Iniciei com validações básicas e evolui para uma arquitetura robusta utilizando Page Object Model (POM), centralização de dados de teste, uso de `baseURL` e hooks como `beforeEach` para otimização do tempo de execução.

---

## Estratégia de cobertura

Além dos caminhos felizes, a cobertura focou em cenários de risco e experiência do usuário:

- Segurança: Controle de acesso a áreas autenticadas e invalidação de sessão após logout.
- Resiliência: Persistência de dados após refresh de página e invalidação de sessão após logout.
- Borda: Comportamentos como início de checkout com carrinho vazio.
- Robustez de API: Validação de entradas inválidas (formato, tamanho e caracteres) e consistência de dados (idempotência).
- Performance: Garantia de que os tempos de resposta da API estão dentro do SLA esperado (<2s).

---

## Escolha das Técnicas e Ferramentas

Utilizei Playwright com JavaScript para ambas as frentes (UI e API). A escolha do Playwright se justifica pela estabilidade (auto-waiting), excelentes recursos de debug e pela possibilidade de manter uma stack unificada, facilitando a manutenção do projeto.

UI: Apliquei testes baseados em fluxo e análise de valor limite (campos obrigatórios). O uso do padrão POM desacoplou a lógica de interação da lógica de validação.

API: Foquei em Testes de Contrato e Testes Negativos, garantindo que a API responda corretamente a requisições malformadas, além de validar a performance e a consistência das respostas.

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

Na UI, organizei os testes por feature (`login`, `inventory/products`, `cart` e `checkout`) e apliquei o padrão Page Object Model para desacoplar a lógica de interação da lógica de validação. Isso tornou os testes mais legíveis, reutilizáveis e menos sensíveis a mudanças na interface.

Na API, organizei os testes por domínio (`cep`, `cnpj` e `performance`) e centralizei os dados de teste em um arquivo específico, facilitando manutenção e entendimento.

Também implementei uma pipeline no GitHub Actions para execução automatizada dos testes, garantindo consistência das execuções e maior confiabilidade da entrega.

---

## Pontos de Atenção e Melhorias

Durante a execução dos testes, foi identificado que a aplicação permite iniciar o fluxo de checkout mesmo quando o carrinho está vazio.

Embora esse comportamento não gere erro técnico, ele pode impactar negativamente a experiência do usuário, permitindo que o fluxo de compra seja iniciado sem a existência de itens.

Como oportunidade de melhoria, recomenda-se:

- Validar a presença de itens no carrinho antes de permitir o início do checkout
- Ou apresentar uma mensagem informativa ao usuário

Essa análise evidencia a importância de alinhar regras de negócio com o comportamento da interface.

---

## Considerações finais

O processo seguiu uma lógica de qualidade contínua: validar o essencial, estabilizar a execução e evoluir a arquitetura. Mais do que automação, a entrega reflete uma preocupação com a sustentabilidade do código e a clareza da documentação para o time de desenvolvimento.
