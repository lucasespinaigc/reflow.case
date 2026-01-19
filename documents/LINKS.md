# Guia de Estudos e Links Úteis

Este guia reúne os vídeos e materiais essenciais para você que está chegando agora no projeto Reflow. Ele é dividido entre os dois pilares principais: **Client (Frontend)** e **Server (Backend)**.

---

## Reflow Client (Frontend)

Stack: **React, TypeScript, Vite, Tailwind CSS.**

### 1. Fundamentos (Obrigatório)
Antes de tudo, garanta que você domina a base.

- **[React Beginner Course 2025](https://www.youtube.com/watch?v=3OqiKTyH4r0)**
  - *Por que assistir:* Cobre exatamente o nosso setup inicial (Vite + React).
- **[Learn TypeScript with React](https://www.youtube.com/watch?v=DxqiBrERv6o)**
  - *Foco:* Essencial para entender props, hooks e eventos com tipagem.
- **[Setup First React + TS Project With Vite](https://www.youtube.com/watch?v=siTUv1L9ymM&t=149s)**

### 2. Interface e Estilização
Não escrevemos CSS puro. Usamos Tailwind para utilitários.

- **[Tailwind CSS Tutorial for Beginners](https://www.youtube.com/watch?v=bupetqS1SMU)**
  - *Foco:* Assista para entender o "thinking in Tailwind" e parar de brigar com classes.
- **[Build a UI Library with React, TypeScript, Tailwind CSS and Storybook](https://www.youtube.com/watch?v=L8SxJ_cN1qc&t=682s)**


### 3. Gerenciamento de Estado

- **[React Query Tutorial (TanStack Query)](https://www.youtube.com/watch?v=r8Dg0KVnfMA)**
  - *Chave:* Caching, loading states e invalidação de dados vindos da API.

### 4. Formulários
- **[React Hook Form (with Zod)](https://www.youtube.com/watch?v=qyzznUNe1ho)**
  - *Importante:* Aprenda a conectar o schema de validação do Zod com os hooks de formulário.

---

## Reflow Server (Backend)

Stack: **NestJS, TypeScript, PostgreSQL, Prisma ORM.**

### 1. Fundamentos (Obrigatório)
O backend é fortemente tipado e organizado.

- **[TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)**
  - *Foco:* Visão geral rápida.
- **[Curso de TypeScript ](https://www.youtube.com/watch?v=ppDsxbUNtNQ&t=2697s)**
- **[Como sair do Zero em Node.js](https://www.youtube.com/watch?v=hHM-hr9q4mo&t=11s)**
  - *Conceito:* Entendendo o runtime.

### 2. O Framework: NestJS
O coração da nossa API. Entenda Injeção de Dependência, Módulos e Controllers.

- **[NestJS Crash Course (Traversy Media)](https://www.youtube.com/watch?v=F_oOtaxb0L8)**
  - *Nota:* Um dos melhores tutoriais práticos.
- **[NestJS do ZERO (Rocketseat)](https://www.youtube.com/watch?v=TRa55WbWnvQ&t=1642s)**
  - *Foco:* Entenda os conceitos básicos do framework.
- **[Entendendo Injeção de Dependência](https://www.youtube.com/watch?v=JLHnJoWLjXI)**
  - *Conceito:* O padrão de design fundamental do NestJS.

### 3. Banco de Dados
- **[Prisma in 100 Seconds](https://www.youtube.com/watch?v=rLRIB6AF2Dg)**
  - *Foco:* Visão geral rápida sobre o Prisma.
- **[NestJS & Prisma](https://www.youtube.com/watch?v=skQXoZ8chxk)**
  - *Foco:* Entender como funciona o Prisma com o NestJS.

### 4. Arquitetura
Como organizamos nossas pastas e arquivos.

- **[Clean Architecture](https://youtu.be/fe4iuaoxGbA?si=88OLeLz_HzTOSpPP)**

---

## Ferramentas e DevOps

### Gerenciador de Pacotes: pnpm (Obrigatório)
O **pnpm** é nosso gerenciador de pacotes padrão. Ele é mais rápido e eficiente em disco que o npm ou yarn.

- **[Why I switched from npm to pnpm](https://www.youtube.com/watch?v=owTU_iVhVXg)**
  - *Por que pnpm:* Entenda os benefícios de performance e "strict mode".
- **[PNPM Basics Explained](https://www.youtube.com/watch?v=mZxAv0bpMWI)**
  - *Explicação:* Entenda os conceitos básicos do gerenciador.
- **[Get Started with pnpm](https://www.youtube.com/watch?v=MvbReZDSKHI)**
  - *Uso:* Guia rápido para começar.

### Outros
- **[Docker para Iniciantes](https://www.youtube.com/watch?v=01MR38eDXz8)**
  - *Uso:* Necessário para entender o funcionamento do docker.
- **[Git e Github para Iniciantes](https://www.youtube.com/watch?v=2alg7MQ6_sI)**
  - *Uso:* Necessário para entender o funcionamento do git.

## Documentação das Técnologias

### Frontend & UI (`reflow.client` / `reflow.ui`)

- **[React](https://react.dev/)** - Biblioteca para construção de interfaces.
- **[Vite](https://vitejs.dev/)** - Build tool e servidor de desenvolvimento.
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Linguagem com tipagem estrita.
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Framework CSS utilitário.
- **[Radix UI](https://www.radix-ui.com/)** - Componentes headless acessíveis.
- **[Phosphor Icons](https://phosphoricons.com/)** - Biblioteca de ícones.
- **[Motion (Framer Motion)](https://www.framer.com/motion/)** - Biblioteca de animações.
- **[React Router](https://reactrouter.com/)** - Roteamento da aplicação.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)** - Gerenciamento de estado e data fetching.
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários.
- **[Orval](https://orval.dev/)** - Geração de cliente API tipado.
- **[Storybook](https://storybook.js.org/docs)** - Documentação de componentes.
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first.
- **[CVA (Class Variance Authority)](https://cva.style/docs)** - Gerenciamento de variantes de componentes.

### Backend (`reflow.server`)

- **[NestJS](https://docs.nestjs.com/)** - Framework Node.js progressivo.
- **[PostgreSQL](https://www.postgresql.org/docs/)** - Banco de dados relacional.
- **[Prisma ORM](https://www.prisma.io/docs/)** - ORM moderno para Node.js e TypeScript.
- **[Passport](https://docs.nestjs.com/security/authentication)** - Middleware de autenticação (Integrado ao NestJS).
- **[JWT (JSON Web Tokens)](https://jwt.io/introduction)** - Padrão de tokens de acesso.
- **[Class-Validator](https://github.com/typestack/class-validator)** - Validação baseada em decorators.
- **[Swagger (OpenAPI)](https://docs.nestjs.com/openapi/introduction)** - Documentação e teste de API.

### Ferramentas Gerais

- **[pnpm](https://pnpm.io/documentation)** - Gerenciador de pacotes rápido e eficiente.
- **[Docker](https://docs.docker.com/)** - Plataforma de containerização.
- **[Git](https://git-scm.com/doc)** - Sistema de controle de versão.
