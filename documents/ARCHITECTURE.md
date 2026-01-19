# Reflow - Arquitetura do Projeto

## Visao Geral

A arquitetura do Reflow é baseada em três pilares principais: `reflow.client`, `reflow.server` e `reflow.docs`. Cada pilar desempenha um papel crucial na funcionalidade e na experiência do usuário.

## Estrutura do Workspace

### Projetos
- **reflow.server:** Backend (NestJS) que centraliza a lógica de negócios e APIs.
- **reflow.client:** Frontend (React + TypeScript, Tailwind CSS) responsável pela interface do usuário.
- **reflow.docs:** Documentação do projeto.
- **reflow.ui:** Design System próprio, que padroniza os componentes visuais e a experiência do usuário em todas as interfaces da plataforma, garantindo consistência, usabilidade e uma identidade visual forte.

## Módulos do reflow.server

### 1. Módulo Core/Business
Núcleo do sistema que encapsula as regras de negócio fundamentais. Atua como orquestrador, integrando os demais módulos e assegurando a consistência e o fluxo correto das operações.

## Tecnologias Utilizadas
- **Backend:** NestJS, Redis (Cache)
- **Banco de Dados:** PostgreSQL
- **Frontend:** React + TypeScript, Tailwind CSS


