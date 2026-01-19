# Padrão de Arquitetura e Organização - Reflow Server

## Visão Geral e Tecnologias
O projeto é um backend robusto utilizando **NestJS** com **TypeScript**. Ele foi desenhado para escalabilidade e manutenção, utilizando práticas de arquitetura limpa (Clean Architecture) e Domain-Driven Design (DDD).

- **Framework Principal:** NestJS.
- **Banco de Dados:** PostgreSQL com Prisma ORM.
- **Autenticação:** Passport, JWT, JWKS.
- **Validação:** Zod e Class-Validator/Transformer.
- **Documentação:** Swagger (OpenAPI) via `@nestjs/swagger`.

## Banco de Dados e ORM
O sistema utiliza **PostgreSQL** como banco de dados relacional, escolhido pela sua robustez, conformidade com ACID e suporte a consultas complexas. A interação com o banco é gerenciada pelo **Prisma ORM**, que oferece:
- **Type-safety:** Tipagem automática baseada no schema do banco.
- **Migrations:** Gerenciamento versionado das alterações no banco de dados.
- **Produtividade:** API intuitiva para operações de CRUD e relacionamentos.

## Arquitetura e Padrões
O projeto segue uma **Arquitetura em Camadas (Layered Architecture)** com forte desacoplamento entre a lógica de negócio e a infraestrutura (banco de dados).

O padrão principal é: **Controller -> Service -> Repository (Abstração) -> Infra (Implementação)**.

### Pontos Chave da Arquitetura:
- **Módulos por Domínio:** O código não é separado por tipo de arquivo (controllers, services), mas sim por **Funcionalidade/Domínio** dentro de `src/modules`. Ex: `users`, `companies`, `projects`. Cada pasta é um "mini-aplicativo" autocontido.
- **Inversão de Dependência (DIP):** Os Services não dependem diretamente do Prisma. Eles dependem de uma classe abstrata (Repository), e a implementação real (que usa o Prisma) é injetada. Isso permite trocar o banco de dados ou mockar testes facilmente.
- **Core e Shared:**
  - `src/modules/core`: Lógica central do negócio compartilhada.
  - `src/shared`: Utilitários, decorators e tipos genéricos que não contêm regra de negócio.

## Organização de um Módulo
No contexto do backend, a organização interna de um módulo (ex: `src/modules/users`) segue este padrão:

### `controllers/` (A Porta de Entrada)
- Recebem as requisições HTTP (GET, POST, etc.).
- Usam Decorators customizados e do **NestJS Swagger** (`@ApiTags`, `@ApiOperation`, `@ApiResponse`) para padronizar rotas, segurança e gerar a documentação da API automaticamente.
- Utilizam DTOs para validar a entrada.
- *Exemplo:* `user.controller.ts` chama `userService.createUser()`.

### `dtos/` (Formato dos Dados)
- **Data Transfer Objects**. Define o que entra e o que sai da API.
- Usa validação (ex: `@IsString`, `@IsEmail`).
- Separação clara entre dados de entrada (`...InDto`) e saída (`...OutDto`).

### `services/` (O Cérebro)
- Contém toda a regra de negócio.
- Não sabe que existe HTTP, nem que existe SQL. Apenas manipula dados.
- Chama o repositório para persistir dados.

### `repositories/` (O Contrato)
- Define classes abstratas (interfaces) do que o banco deve fazer (ex: `abstract createUser(...)`).
- Isso garante que o Service não fique "preso" ao ORM específico.

### `infra/` (O "Mecanismo")
- Aqui fica a implementação real.
- `infra/db/repositories/`: Classes que estendem o repositório abstrato e chamam o cliente do banco de dados (Prisma) de fato.

## Resumo do Fluxo de uma Requisição
1. Requisição chega em **UserController** (POST `/users`).
2. **ValidationPipe** valida o corpo usando `CreateUserInDto`.
3. Controller chama **UserService.createUser**.
4. Service aplica regras (ex: verifica se email já existe) e chama **UserRepository.createUser**.
5. NestJS injeta a versão concreta **UserPrismaRepository** (que está na pasta infra).
6. Repository salva no banco via Prisma e retorna os dados.
