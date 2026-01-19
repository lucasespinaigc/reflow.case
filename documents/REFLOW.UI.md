# Padrão de Arquitetura e Organização - Reflow UI

## Visão Geral
O projeto **reflow.ui** é uma Biblioteca de Componentes (Design System) construída para exportar componentes reutilizáveis para as aplicações do ecossistema Reflow (como o `reflow.client`). Diferente de uma aplicação monolítica, seu foco é fornecer blocos de construção isolados, testados e documentados.

## Tecnologias Principais
- **Framework:** React 18
- **Linguagem:** TypeScript (tipagem estrita)
- **Build Tool:** Vite
- **Estilização:** 
  - **Tailwind CSS:** Framework utilitário.
  - **tailwind-merge:** Resolução de conflitos de classes.
  - **class-variance-authority (CVA):** Gerenciamento de variantes de componentes.
- **Headless UI:** Radix UI (base para acessibilidade e lógica de componentes complexos como Dialog, Popover, Slot).
- **Formulários:** React Hook Form + Zod.
- **Gerenciamento de Estado:** TanStack Query.
- **Documentação:** Storybook.

## Arquitetura (Atomic Design Adaptado)
O projeto segue uma estrutura inspirada em **Atomic Design**, separando componentes por níveis de complexidade e responsabilidade:

### 1. Core (Átomos e Moléculas)
Localizados em `src/core`.
- **Definição:** Componentes fundamentais, de baixo nível e agnósticos ao negócio.
- **Exemplos:** `Button`, `Input`, `Card`, `Badge`.
- **Características:** 
  - Altamente reutilizáveis.
  - Recebem dados via props simples (strings, booleans).
  - Possuem múltiplas variantes visuais controladas via CVA.

### 2. Customs (Organismos e Templates)
Localizados em `src/customs`.
- **Definição:** Componentes complexos compostos por vários componentes do `core`.
- **Exemplos:** `UserProfile`, `Calendar`, `Sidenav`.
- **Características:** 
  - Podem conter lógica de apresentação específica.
  - Recebem objetos de dados estruturados (ex: objeto `User`) em vez de props soltas.

### 3. Utilitários e Hooks
- `src/utils`, `src/hooks`, `src/constants`: Funções auxiliares, hooks personalizados e constantes globais compartilhadas.

## Estrutura de Diretórios
A organização interna dos componentes é padronizada para facilitar a manutenção e escalabilidade:

```
src/
├── core/
│   └── button/
│       ├── button.tsx           # Lógica e UI do componente
│       ├── button.stories.tsx   # Documentação e exemplos (Storybook)
│       ├── button.types.ts      # Definições de Tipos (Interfaces/Types)
│       └── index.ts             # Exportação do componente
└── customs/
    └── user-profile/
        ├── user-profile.tsx
        ├── user-profile.types.ts
        └── user-profile.stories.tsx
```

## Padrões de Desenvolvimento

### Gerenciamento de Variantes (CVA)
Utilizamos `class-variance-authority` para definir variantes visuais (ex: `solid`, `outline`, `ghost`) e tamanhos. Isso centraliza toda a lógica de classes CSS baseada em props.

```typescript
const buttonVariants = cva("classes-base...", {
    variants: { variant: {...}, size: {...}, color: {...} }
});
```

### Props e Polimorfismo
- **Tipagem:** As props estendem atributos HTML nativos (ex: `React.ButtonHTMLAttributes`) para garantir que o componente aceite propriedades padrão como `onClick`, `id`, etc.
- **Polimorfismo (`asChild`):** Utilizamos o `Slot` do Radix UI. A prop `asChild` permite que o componente renderize como seu elemento filho, mantendo os estilos. Útil para transformar um `Button` visual em um link `<a>` semântico.
- **ForwardRef:** Todos os componentes utilizam `forwardRef` para permitir que a aplicação consumidora manipule o elemento DOM diretamente quando necessário.

### Automação e Exportação
- **Barrel Exports:** O arquivo `src/index.ts` serve como ponto único de entrada, exportando tudo o que está em `core` e `customs` para os consumidores da biblioteca.
