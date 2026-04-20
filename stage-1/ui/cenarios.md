etapa-1/front-end/cenarios.md

Cenário: Login com credenciais válidas
Dado que o usuário acessa a página de login
Quando informa usuário e senha válidos
E clica no botão "Login"
Então o sistema deve redirecionar para a página de produtos
E exibir a lista de produtos

Cenário: Impedir login com usuário bloqueado
Dado que o usuário está na página de login
Quando informa um usuário bloqueado
E tenta acessar o sistema
Então o sistema deve exibir mensagem de erro
E não permitir o acesso

Cenário: Exibir erro ao realizar login com credenciais inválidas
Dado que o usuário está na página de login
Quando informa credenciais inválidas
E clica em "Login"
Então o sistema deve exibir mensagem de erro
E permanecer na tela de login

Cenário: Adicionar produto ao carrinho
Dado que o usuário está logado na página de produtos
Quando adiciona um produto ao carrinho
Então o contador do carrinho deve ser atualizado
E o produto deve ser incluído no carrinho

Cenário: Remover produto do carrinho
Dado que o usuário possui um produto no carrinho
Quando remove o produto
Então o produto deve ser removido
E o contador do carrinho deve ser atualizado

Cenário: Visualizar produtos no carrinho
Dado que o usuário adicionou produtos ao carrinho
Quando acessa a página do carrinho
Então os produtos devem ser exibidos corretamente

Cenário: Finalizar compra com dados válidos
Dado que o usuário possui produtos no carrinho
Quando inicia o checkout
E preenche os dados obrigatórios corretamente
E confirma a compra
Então o sistema deve exibir mensagem de sucesso

Cenário: Validar campos obrigatórios no checkout
Dado que o usuário está na etapa de checkout
Quando tenta avançar sem preencher os campos obrigatórios
Então o sistema deve exibir mensagens de erro
E impedir o avanço

Cenário: Ordenar produtos por preço crescente
Dado que o usuário está na página de produtos
Quando seleciona a ordenação por menor preço
Então os produtos devem ser exibidos em ordem crescente de valor

Cenário: Realizar logout
Dado que o usuário está logado
Quando realiza logout
Então o sistema deve redirecionar para a tela de login

Cenário: Manter sessão após refresh
Dado que o usuário está logado
Quando atualiza a página
Então deve permanecer logado
E continuar na página de produtos

Cenário: Impedir acesso direto à página de produtos sem login
Dado que o usuário não está autenticado
Quando tenta acessar /inventory diretamente
Então deve ser redirecionado para login

Cenário: Manter itens no carrinho após navegação
Dado que o usuário adicionou um produto ao carrinho
Quando navega entre páginas
Então o item deve permanecer no carrinho

Cenário: Comportamento do checkout com carrinho vazio
Dado que o usuário não possui produtos no carrinho
Quando tenta iniciar o checkout
Então o sistema permite acessar a etapa de checkout
E não exibe validação de carrinho vazio

Cenário: Impedir acesso à área autenticada após logout
Dado que o usuário realizou logout
Quando tenta acessar /inventory
Então deve ser redirecionado para login

Cenário: Ordenação mantém consistência após interação
Dado que os produtos estão ordenados por preço crescente
Quando adiciona um item ao carrinho
Então a ordenação deve permanecer aplicada

## Abordagem de Testes - UI

Para os testes de UI, foram utilizadas técnicas de testes baseados em fluxo do usuário, partição de equivalência e análise de valor limite.

A abordagem priorizou os principais fluxos da aplicação, como autenticação, navegação, manipulação de carrinho e finalização de compra, garantindo cobertura do comportamento esperado do usuário.

A partição de equivalência foi aplicada na validação de credenciais (válidas, inválidas e usuários bloqueados), enquanto a análise de valor limite foi considerada em validações de campos obrigatórios no checkout.

Também foram considerados cenários negativos e validações de interface, garantindo feedback adequado ao usuário e maior confiabilidade da aplicação.
