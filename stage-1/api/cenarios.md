etapa-1/api/cenarios.md

Cenário: Consultar CEP válido
Dado que o usuário possui um CEP válido
Quando ele realiza uma requisição para o endpoint de CEP
Então o sistema deve retornar status 200
E deve retornar os dados do endereço corretamente

Cenário: Consultar CEP inexistente
Dado que o usuário informa um CEP inexistente
Quando realiza a requisição
Então o sistema deve retornar erro
E mensagem informando que o CEP não foi encontrado

Cenário: Consultar CEP com formato inválido
Dado que o usuário informa um CEP em formato inválido
Quando realiza a requisição
Então o sistema deve retornar erro 400

Cenário: Validar estrutura da resposta do CEP
Dado que o usuário consulta um CEP válido
Quando recebe a resposta
Então o JSON deve conter:

- cep
- state
- city
- neighborhood
- street

Cenário: Consultar CNPJ válido
Dado que o usuário possui um CNPJ válido
Quando realiza a requisição
Então o sistema deve retornar status 200
E os dados da empresa corretamente

Cenário: Consultar CNPJ inválido
Dado que o usuário informa um CNPJ inválido
Quando realiza a requisição
Então o sistema deve retornar erro

Cenário: Validar tempo de resposta da API
Dado que o usuário realiza uma requisição válida
Então o tempo de resposta deve ser inferior a 2 segundos

Cenário: CEP com caracteres inválidos
Dado que o usuário informa um CEP com letras ou símbolos
Quando realiza a requisição
Então o sistema deve retornar erro

Cenário: CEP com tamanho inválido
Dado que o usuário informa um CEP com menos de 8 dígitos
Quando realiza a requisição
Então o sistema deve retornar erro

Cenário: CNPJ com formatação
Dado que o usuário informa um CNPJ com máscara (00.000.000/0001-00)
Quando realiza a requisição
Então o sistema deve processar corretamente

Cenário: Validar consistencia de resposta para o mesmo CEP
Dado que o usuário realiza múltiplas requisições para o mesmo CEP
Então os dados retornados devem ser consistentes

## Abordagem de Testes - API

Para os testes de API, foram utilizadas as técnicas de partição de equivalência, análise de valor limite e validação de contrato.

A partição de equivalência foi aplicada na separação entre entradas válidas e inválidas (ex: CEP válido, inexistente e com formato incorreto).

A análise de valor limite foi considerada para validar formatos de entrada (quantidade de caracteres, estrutura de dados).

Além disso, foi aplicada validação de contrato para garantir que a estrutura da resposta da API esteja consistente, independente dos dados retornados.

Também foram considerados cenários de erro e tempo de resposta, garantindo maior confiabilidade e robustez da API.
