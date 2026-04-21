Cenários de Teste - UI (Sauce Demo)

## 1. Autenticação e Segurança

**Cenário: Login com credenciais válidas**

- **Dado** que o usuário está na página de login
- **Quando** insere um nome de usuário e senha válidos
- **Então** o sistema deve redirecioná-lo para a página de produtos
- **E** a lista de produtos deve estar visível

**Cenário: Impedir login com usuário bloqueado**

- **Dado** que o usuário tenta logar com uma conta bloqueada
- **Quando** clica no botão de login
- **Então** o sistema deve exibir mensagem de erro

**Cenário: Exibir erro ao realizar login com credenciais inválidas**

- **Dado** que o usuário insere dados de acessos incorretos
- **Quando** clica no botão de login
- **Então** o sistema deve exibir uma mensagem de erro indicando que as credenciais não correspondem

**Cenário: Impedir acesso direto à página de produtos sem login**

- **Dado** que um usuário não autenticado tenta acessar a URL /inventory.html diretamente
- **Quando** a página carrega
- **Então** o sistema deve redirecionar para página inicial (login)

**Cenário: Realizar logout**

- **Dado** que o usuário está autenticado
- **Quando** ele seleciona a opção "Logout" no menu lateral
- **Então** o sistema deve encerrar a sessão e retornar à tela de login

**Cenário: Impedir acesso à área autenticada após logout**

- **Dado** que o usuário acabou de realizar logout
- **Quando** ele tenta voltar para a página anterior no navegador
- **Então** o sistema deve garantir que ele permaneça na tela de login ou seja redirecionado por falta de sessão

## 2. Produtos e Carrinho

**Cenário: Ordenar produtos por preço crescente**

- **Dado** que o usuário está na página de produtos
- **Quando** seleciona a ordenação por menor preço
- **Então** os produtos devem ser exibidos em ordem crescente de valor

**Cenário: Ordenação mantém consistência após interação**

- **Dado** que os produtos estão ordenados por preço crescente
- **Quando** adiciona um item ao carrinho
- **Então** a ordenação deve permanecer aplicada

**Cenário: Adicionar produtos ao carrinho**

- **Dado** que o usuário está logado na página de produtos
- **Quando** adiciona um produto ao carrinho
- **Então** o contador do carrinho deve ser atualizado
- **E** o produto deve ser incluído no carrinho

**Cenário: Remover produto do carrinho**

- **Dado** que o usuário possui um produto no carrinho
- **Quando** remove o produto
- **Então** o produto deve ser removido
- **E** o contador do carrinho deve ser atualizado

**Cenário: Visualizar produtos no carrinho**

- **Dado** que o usuário adicionou produtos ao carrinho
- **Quando** acessa a página do carrinho
- **Então** os produtos devem ser exibidos corretamente

**Cenário: Manter itens no carrinho após navegação**

- **Dado** que o usuário adicionou produtos ao carrinho
- **Quando** navega entre páginas
- **Então** o item deve permanecer no carrinho

**Cenário: Manter sessão após refresh**

- **Dado** que o usuário acabou de realizar logout
- **Quando** ele tenta voltar para a página anterior no navegador
- **Então** o sistema deve garantir que ele permaneça na tela de login ou seja redirecionado por falta de sessão

## 3. Checkout e Finalização

**Cenário: Finalizar compra com dados válidos**

- **Dado** que o usuário possui produtos no carrinho
- **Quando** inicia o checkout
- **E** preenche os dados obrigatórios corretamente
- **E** confirma a compra
- **Então** o sistema deve exibir mensagem de sucesso

**Cenário: Validar campos obrigatórios no checkout**

- **Dado** que o usuário está na etapa de checkout
- **Quando** tenta avançar sem preencher os campos obrigatórios
- **Então** o sistema deve exibir mensagens de erro
- **E** impedir o avanço

**Cenário: Comportamento do checkout com carrinho vazio**

- **Dado** que o usuário não possui produtos no carrinho
- **Quando** tenta iniciar o checkout
- **Então** o sistema permite acessar a etapa de checkout
- **E** não exibe validação de carrinho vazio

## Abordagem de Testes - UI

Para os testes de UI, foram utilizadas técnicas de testes baseados em fluxo do usuário, partição de equivalência e análise de valor limite.

Fluxos Principais: A abordagem priorizou os principais fluxos da aplicação, como autenticação, navegação, manipulação de carrinho e finalização de compra.

Partição de Equivalência: Aplicada na validação de credenciais (válidas, inválidas e usuários bloqueados).

Análise de Valor Limite: Considerada em validações de campos obrigatórios no checkout e regras de interface.

Resiliência: Validação de persistência de estado (refresh e navegação) e segurança de rotas (acesso direto).
