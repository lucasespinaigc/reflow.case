# Padrões de Codificação

Este documento estabelece os padrões de codificação a serem seguidos no desenvolvimento do projeto Reflow. Seguir esses padrões garante consistência, legibilidade e manutenção eficiente do código ao longo do tempo.

## Padrões de Nomenclatura e Clean Code

A qualidade do código é frequentemente medida pela facilidade de leitura e entendimento. Adotamos princípios de **Clean Code** para garantir que nosso código seja expressivo e fácil de manter. O objetivo é minimizar a confusão durante revisões de código (o famoso "WTF Test").

### Princípios Gerais

Ao nomear qualquer item no código, o nome deve responder a três perguntas:
1.  **Por que existe?**
2.  **O que faz?**
3.  **Como é usado?**

### Idioma

O idioma oficial do projeto é o **Inglês**. Isso se aplica a:
*   **Código:** Nomes de variáveis, funções, classes, arquivos, etc.
*   **Comentários:** Todos os comentários explicativos no código.
*   **Commits:** Mensagens de commit.
*   **Pull Requests:** Títulos e descrições.

### Formatações e Padrões de Escrita

Adotamos padrões específicos de escrita para diferentes contextos do código. Isso facilita a identificação visual do tipo de elemento apenas lendo seu nome.

#### 1. camelCase
Utilizado para **variáveis, funções, métodos, propriedades e parâmetros**.
*   **Regra:** A primeira letra é minúscula e a primeira letra de cada palavra subsequente é maiúscula.
*   **Exemplo:** `firstName`, `getUserData`, `isValidUser`.

#### 2. PascalCase
Utilizado para **Classes, Interfaces, Types, Enums, Decorators e Componentes React**.
*   **Regra:** A primeira letra de cada palavra (incluindo a primeira) é maiúscula.
*   **Exemplo:** `UserProfile`, `PaymentService`, `AuthGuard`.

#### 3. kebab-case
Utilizado estritamente para **nomes de arquivos, diretórios e URLs**.
*   **Regra:** Todas as letras são minúsculas e as palavras são separadas por hífen.
*   **Exemplo:** `user-profile.ts`, `auth-controller.ts`, `/api/reset-password`.

#### 4. UPPER_CASE
Utilizado para **Constantes globais (estáticas) e valores de Enums**.
*   **Regra:** Todas as letras maiúsculas, separadas por underscore.
*   **Exemplo:** `MAX_RETRY_ATTEMPTS`, `DEFAULT_PAGE_SIZE`.

### Regras Específicas de Nomenclatura

#### 1. Variáveis
Use **substantivos** que descrevam claramente o valor armazenado. Evite nomes genéricos ou abreviações obscuras.

*   **[Correto]** `user`, `accountBalance`, `customers`
*   **[Incorreto]** `u`, `data`, `val`, `list`

**Evite Tipagem no Nome:**
Como usamos TypeScript, não é necessário incluir o tipo da variável no nome.
*   **[Correto]** `userList` ou `users`
*   **[Incorreto]** `userArray`, `userInt`

#### 2. Funções e Métodos
Use **verbos** que descrevam a ação ou tarefa realizada.

*   **[Correto]** `calculateTotal()`, `getUser()`, `uploadDocument()`
*   **[Incorreto]** `userData()`, `process()`

#### 3. Booleanos
Nomes de variáveis booleanas devem soar como perguntas cujas respostas sejam verdadeiro ou falso. Utilize prefixos como `is`, `has`, `can` ou `should`.

*   **[Correto]** `isActive`, `hasPermission`, `canEdit`
*   **[Incorreto]** `status`, `flag`, `check`

#### 4. Consistência
Mantenha a consistência nos verbos utilizados em todo o projeto.
*   Se você usa `get` para recuperar dados (ex: `getUsers`), não use `fetch` ou `retrieve` em outros lugares para a mesma finalidade.
*   Se usa `save` para salvar, evite misturar com `store` ou `persist`.

#### 5. Clareza e Busca
*   **Pronunciabilidade:** Use nomes que possam ser lidos em voz alta sem dificuldade. Isso facilita a comunicação entre a equipe.
*   **Facilidade de Busca:** Evite nomes de uma única letra (como `e`, `x`, `t`), pois são difíceis de localizar em uma busca global no projeto.
    *   *Exceção:* Variáveis de controle em loops curtos (`i`, `j`) são aceitáveis.

### O que Evitar

1.  **Desinformação:** Não use nomes que sugiram algo que o código não faz (ex: `updateUser` para uma função que cria um novo usuário).
2.  **Abreviações Excessivas:** Evite abreviar a menos que seja um termo universal (ex: `id`, `db`). Prefira `customer` a `cust`.
3.  **Contexto Desnecessário:** Se uma variável está dentro da classe `User`, não precisa chamá-la de `userName`. Apenas `name` é suficiente (`user.name`).
4.  **Uso de Emojis:** Não utilize emojis em comentários de código, mensagens de commit, nomes de variáveis ou documentação técnica interna. Mantenha o tom estritamente profissional.

### Convenções de Arquivos e Estrutura

O projeto segue estritamente padrões universais do ecossistema TypeScript/Node para organização de arquivos:

*   **Arquivos e Diretórios:** Utilize **kebab-case**.
    *   Exemplo: `user.controller.ts`, `/users/toggle-active`.
*   **Classes e Decorators:** Utilize **PascalCase**.
    *   Exemplo: `UserController`, `EndpointResponse`.
*   **Propriedades e Métodos:** Utilize **camelCase**.
    *   Exemplo: `createUser`, `userRepository`.
*   **Sufixos Explícitos:** Todos os arquivos devem ter um sufixo que identifique sua responsabilidade. Isso facilita a busca e identificação rápida.
    *   `...Controller` (ex: `user.controller.ts`)
    *   `...Service` (ex: `user.service.ts`)
    *   `...Repository` (ex: `user.repository.ts`)
    *   `...InDto`, `...OutDto` (ex: `create-user.in-dto.ts`)


## Modularização e Reutilização

A arquitetura do Reflow é fundamentada na modularidade. Buscamos sempre criar componentes e funções pequenos, focados e reutilizáveis.

### Princípios de Modularização

1.  **Responsabilidade Única (SRP):** Cada módulo, classe ou função deve ter apenas uma razão para mudar.
2.  **DRY (Don't Repeat Yourself):** Evite duplicação de código. Se uma lógica é utilizada em mais de um lugar, ela deve ser extraída para uma função utilitária, hook ou componente compartilhado.
3.  **Composição sobre Herança:** Prefira compor funcionalidades complexas através da união de pequenos blocos simples e testáveis.
4.  **Localização do Código:**
    *   Código específico de uma feature fica dentro do módulo da feature (Colocation).
    *   Código reutilizável em múltiplos módulos deve ser movido para `src/shared` ou bibliotecas (`libs`) no contexto do projeto.

## Práticas de Design de API RESTful

Uma API Web RESTful adota os princípios arquitetônicos REST (Representational State Transfer) para criar uma interface sem estado e fracamente acoplada. Ela utiliza o protocolo HTTP padrão para manipular recursos e retornar representações (como JSON).

### Princípios Fundamentais

1.  **Independência de Plataforma:** Clientes podem interagir com a API independentemente da implementação interna, usando HTTP e formatos padrão (JSON/XML).
2.  **Acoplamento Fraco:** Cliente e servidor evoluem independentemente. A comunicação é baseada em contratos de dados e protocolos padrão.
3.  **Interface Uniforme:** Uso consistente de verbos HTTP (GET, POST, PUT, PATCH, DELETE) e URIs de recursos.
4.  **Sem Estado (Stateless):** Cada requisição contém toda a informação necessária. O servidor não mantém estado da sessão do cliente entre requisições, melhorando a escalabilidade.

### Conceitos de Design

-   **Recursos e URIs:** Tudo é um recurso (objeto, dado, serviço) identificado por um URI único.
    -   Exemplo: `https://api.reflow.com/orders/1`
-   **Representação:** O formato dos dados retornados (geralmente JSON).
-   **HATEOAS (Hypermedia):** A resposta pode incluir links para ações relacionadas, permitindo navegação dinâmica.

### Convenções de Nomenclatura de URI

-   **Use Substantivos:** Represente recursos, não ações.
    -   (Correto) `https://api.reflow.com/orders`
    -   (Incorreto) `https://api.reflow.com/create-order`
-   **Use Plural para Coleções:**
    -   `/customers` (Coleção)
    -   `/customers/5` (Item específico)
-   **Hierarquia e Relacionamentos:**
    -   `/customers/5/orders` (Pedidos do cliente 5)
    -   Evite aninhamento profundo (ex: `/customers/1/orders/99/products`). Prefira links ou filtros.
-   **Kebab-case:** Prefira letras minúsculas e hífens para URLs (ex: `/product-categories`).

### Métodos HTTP e Códigos de Status

O comportamento dos métodos depende se o alvo é uma coleção ou um item.

| Recurso | POST (Criar) | GET (Ler) | PUT (Substituir) | PATCH (Atualizar) | DELETE (Remover) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/customers` | Cria novo cliente | Lista clientes | Atualização em massa (raro) | Atualização em massa (raro) | Remove todos (perigoso) |
| `/customers/1` | Erro (geralmente) | Detalhes do cliente 1 | Substitui cliente 1 | Atualiza campos do cliente 1 | Remove cliente 1 |

#### Detalhes dos Métodos

**GET (Leitura)**
-   Recupera dados. Não deve ter efeitos colaterais.
-   **200 OK:** Sucesso.
-   **404 Not Found:** Recurso não encontrado.

**POST (Criação)**
-   Cria um novo recurso em uma coleção. O servidor define o ID.
-   **201 Created:** Sucesso (retorna cabeçalho `Location` com o novo URI).
-   **400 Bad Request:** Dados inválidos.

**PUT (Substituição)**
-   Substitui completamente um recurso ou cria se não existir (se o ID for conhecido). É idempotente.
-   **200 OK** ou **204 No Content**: Sucesso.
-   **409 Conflict:** Conflito de estado.

**PATCH (Atualização Parcial)**
-   Atualiza apenas os campos enviados.
-   **200 OK:** Sucesso.

**DELETE (Remoção)**
-   Remove um recurso.
-   **204 No Content:** Sucesso.
-   **404 Not Found:** Recurso já não existe.

### Boas Práticas Adicionais

-   **Evite "Chatty I/O":** Não obrigue o cliente a fazer dezenas de requisições pequenas. Permita buscar dados relacionados ou agregados quando apropriado.
-   **Abstração do Banco de Dados:** A API não deve espelhar tabelas do banco. Modele entidades de negócio.
-   **Filtros e Paginação:** Para coleções grandes, use query params: `/orders?limit=10&offset=0`.

### Padronização com Decorators Customizados

Para garantir consistência, validação e documentação automática, evitamos o uso de decorators "crus" do NestJS/Swagger (como `@ApiResponse`, `@ApiBody`) diretamente nos controllers.

*   **Abstração Unificada:** Utilizamos decorators wrapper localizados em `src/shared/decorators/endpoint.ts`.
*   **Decorators Principais:** `@EndpointName`, `@EndpointResponse`, `@EndpointBody`.
*   **Benefício:** Garante que **todos** os endpoints possuam validação, documentação Swagger e tratamento de erros configurados de forma padronizada, reduzindo a repetição de código nos controllers.

## Validação e Transferência de Dados (DTOs)

### Separação Estrita de DTOs (Input/Output)

Adotamos uma disciplina rígida de separar os dados que entram na API dos dados que saem.

*   **InDto (Input):** Define os dados recebidos na requisição.
*   **OutDto (Output):** Define os dados retornados na resposta.
*   **Por que usar:** Diferente de usar uma única classe `UserDto`, essa separação evita o vazamento de dados sensíveis (como senhas ou propriedades internas) e desacopla o contrato de entrada do contrato de saída.

### Validação e Tipagem com Zod (DRY)

Utilizamos a biblioteca **Zod** para validação de esquemas e inferência de tipos, substituindo o uso isolado do `class-validator` em muitos casos.

*   **Reuso de Código (DRY):** Os DTOs frequentemente herdam a estrutura das Entidades de Domínio para evitar repetição.
    *   Exemplo: `CreateUserInDto = User.pick({ name: true, email: true })`.
*   **Consistência:** Se a definição da Entidade mudar, os DTOs que herdam dela são atualizados automaticamente, garantindo que a validação esteja sempre sincronizada com o domínio.

