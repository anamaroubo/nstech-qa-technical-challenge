Cenários de Teste - API (BrasilAPI)

## 1. Consulta de CEP

**Cenário: Consultar CEP válido**

- **Dado** que o usuário possui um CEP válido
- **Quando** ele realiza uma requisição para o endpoint de CEP
- **Então** o sistema deve retornar status 200
- **E** deve retornar os dados do endereço corretamente

**Cenário: Consultar CEP inexistente**

- **Dado** que o usuário informa um CEP inexistente
- **Quando** realiza a requisição
- **Então** o sistema deve retornar status 404
- **E** a mensagem contendo a palavra "erro"

**Cenário: Consultar CEP com formato inválido**

- **Dado** que o usuário informa um CEP em formato inválido (ex: alfanumérico)
- **Quando** realiza a requisição
- **Então** o sistema deve retornar erro 400
- **E** a mensagem de erro deve conter a palavra "cep"

**Cenário: Consultar CEP caracteres inválidos**

- **Dado** que o usuário informa um CEP inválido (ex: 12A45-6@)
- **Quando** realiza a requisição
- **Então** o sistema deve retornar erro 400
- **E** a mensagem de erro deve conter a palavra "cep"

**Cenário: Consultar CEP com tamanho inválido**

- **Dado** que o usuário informa um CEP com menos de 8 dígitos
- **Quando** realiza a requisição
- **Então** o sistema deve retornar erro 400
- **E** a mensagem de erro deve conter a palavra "cep"

**Cenário: Validar consistência de resposta para o mesmo CEP**

- **Dado** que o usuário realiza múltiplas requisições para o mesmo CEP
- **Então** os dados retornados em todas as chamadas devem ser idênticos

## 2. Consulta de CNPJ

**Cenário: Consultar CNPJ válido**

- **Dado** que o usuário possui um CNPJ válido (apenas números)
- **Quando** realiza a requisição
- **Então** o sistema deve retornar status 200
- **E** os dados da empresa (Razão Social e CNPJ) corretamente

**Cenário: CNPJ com máscara**

- **Dado** que o usuário informa um CNPJ com máscara (00.000.000/0001-00) na URL
- **Quando** realiza a requisição
- **Então** o sistema deve retornar status 404 (formato não suportado via URL)

**Cenário: Consultar CNPJ inválido/malformado**

- **Dado** que o usuário informa um CNPJ inválido
- **Quando** realiza a requisição
- **Então** o sistema deve retornar erro 400
- **E** a mensagem de erro deve conter a palavra "CNPJ"

**Cenário: Validar campos essenciais do retorno de CNPJ (Contrato)**

- **Dado** que o usuário consulta um CNPJ válido
- **Então** a resposta deve obrigatoriamente conter os campos: nome_fantasia, cnae_fiscal, logradouro, numero, bairro e uf

## 3. Performance

**Cenário: Validar tempo de resposta da API para consulta de CEP**

- **Dado** que o sistema está operante e acessível
- **Quando** o usuário realiza uma requisição válida para um CEP válido
- **Então** o tempo total de resposta deve ser inferior a 2000ms (2 segundos)
- **E** o status da resposta deve ser 200

**Cenário: Validar tempo de resposta da API para consulta de CNPJ**

- **Dado** que o sistema está operante e acessível
- **Quando** o usuário realiza uma requisição válida para um CNPJ válido
- **Então** o tempo total de resposta deve ser inferior a 2000ms (2 segundos)
- **E** o status da resposta deve ser 200

## Abordagem de Testes - API

Para os testes de API, foram utilizadas as técnicas de **partição de equivalência**, **análise de valor limite** e **validação de contrato**.

- **Partição de Equivalência:** Aplicada na separação entre entradas válidas e inválidas.
- **Análise de Valor Limite:** Considerada para validar formatos de entrada (quantidade de dígitos do CEP).
- **Validação de Contrato:** Garante que a estrutura da resposta (JSON) e campos essenciais estejam presentes.
- **Testes de Performance:** Verificação de tempo de resposta (latency) para garantir a confiabilidade do serviço.
