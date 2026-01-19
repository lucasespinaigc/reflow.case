# Conceitos Essenciais do Reflow

Este documento serve como um guia introdutório para desenvolvedores que estão conhecendo o ecossistema **Reflow**. Ele destila os conceitos fundamentais, decisões de arquitetura e tecnologias essenciais para navegar e contribuir com o projeto.


O projeto é dividido em três pilares principais:
- **reflow.server:** O cérebro da operação (Backend API).
- **reflow.client:** A interface de administração (Frontend SPA).
- **reflow.ui:** A biblioteca de componentes interna baseada em **Tailwind CSS** e **Radix UI**.
- **reflow.docs:** A base de conhecimento (Documentação).

## 2. Conceitos de Backend (reflow.server)

O backend é construído com **NestJS** e foca em robustez e separação de responsabilidades.

### Arquitetura em Camadas
Nós não misturamos tudo em um arquivo só. A lógica flui de maneira previsível:
1.  **Controller:** Recebe a requisição HTTP. *Não contém regra de negócio.*
2.  **Service:** Executa a regra de negócio (validações, cálculos). *Não sabe o que é HTTP ou SQL.*
3.  **Repository:** Define o contrato de acesso aos dados.
4.  **Infra/Prisma:** Busca os dados no Banco de Dados.

### Segurança de Tipos e Validação (DTOs)
Para garantir que os dados estejam sempre corretos:
- **DTO (Data Transfer Object):** Classes que definem o formato dos dados.
- **Input vs Output:** Temos DTOs separados para entrada (`CreateUserInDto`) e saída (`UserOutDto`). Isso evita vazar senhas ou dados internos.
- **Zod:** Biblioteca usada para validar se o email é um email, se a senha é forte, etc.

### Banco de Dados (PostgreSQL & Prisma)
- **PostgreSQL:** Nosso banco de dados relacional confiável.
- **Prisma ORM:** Ferramenta que usamos para conversar com o banco. Ele gera tipos TypeScript automaticamente baseados no nosso banco, garantindo que se mudarmos uma tabela, o código avisa onde quebrou.

## 3. Conceitos de Frontend (reflow.client)

O frontend é uma aplicação moderna **React** focada em experiência do usuário.

### Colocation (Co-localização)
Em vez de separar arquivos por "tipo" (todos os botões juntos, todas as funções juntas), nós agrupamos por **Funcionalidade**.
- Tudo que a página de "Login" precisa (estilos, hooks, componentes específicos) fica dentro da pasta `login`.
- Isso facilita apagar ou refatorar funcionalidades sem deixar "lixo" para trás.

## 4. Design System (reflow.ui)
Não criamos botões do zero em cada tela. Usamos o **reflow.ui**, nossa biblioteca de componentes interna baseada em **Tailwind CSS** e **Radix UI**.
- **Atomic Design:** Componentes simples (`Button`, `Input`) são combinados para criar interfaces complexas (`LoginForm`).
- **Consistência:** Garantimos que todo o app tenha a mesma cara e comportamento.

## 5. Ferramentas Essenciais

### pnpm (Gerenciador de Pacotes)
Utilizamos exclusivamente o **pnpm** (Performant npm) em vez do npm ou yarn.
- **Eficiência:** O pnpm economiza espaço em disco usando um "content-addressable store". Se 10 projetos usam a mesma versão do React, ela é salva apenas uma vez no disco.
- **Strict Mode:** Ele não permite acessar pacotes que não estão declarados explicitamente no `package.json`, evitando o problema de "phantom dependencies" (dependências fantasmas) que causam bugs difíceis de rastrear.

## 6. Glossário

- **API RESTful:** Estilo de arquitetura onde o backend expõe recursos (como `/users`) que podem ser manipulados via HTTP (GET, POST).
- **SPA (Single Page Application):** O site carrega uma única vez e navega instantaneamente, parecendo um aplicativo nativo.
- **ORM (Object-Relational Mapping):** Técnica para converter dados do banco (tabelas) em objetos de código (classes/jsons) automaticamente.
- **DDD (Domain-Driven Design):** Filosofia de design onde o código reflete a linguagem e as regras do mundo real (Domínio) do negócio.
- **CI/CD:** Práticas de integração e entrega contínua para automatizar testes e deploys.
