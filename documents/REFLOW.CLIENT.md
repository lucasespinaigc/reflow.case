# Padrão de Arquitetura e Organização - Reflow Client

## Visão Geral
O projeto é um Single Page Application (SPA) construído com React, utilizando TypeScript. A arquitetura segue um padrão de organização modular e hierárquico, focado em features (funcionalidades), onde o código relacionado a uma funcionalidade específica é mantido próximo (colocation).

## Tecnologias Principais

- **React** - Biblioteca para construção de interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **Orvaljs** - Geração de cliente API tipado
- **React Router** - Roteamento da aplicação
- **TailwindCSS** - Framework CSS utilitário
- **Phosphor Icons** - Biblioteca de ícones
- **Motion** - Biblioteca de animações
- **Storybook** - Documentação e desenvolvimento de componentes

## Estrutura de Diretórios e Organização

### Estrutura Macro
```
src/
├── assets/         # Recursos estáticos
├── components/     # Componentes reutilizáveis
├── constants/      # Constantes e configurações
├── dashboard/      # Componentes do dashboard
├── emitter/        # Sistema de eventos
├── hooks/          # Custom hooks React
├── i18n/           # Internacionalização
├── lib/            # Bibliotecas e utilitários
├── pages/          # Páginas da aplicação
├── shared/         # Componentes compartilhados
├── styles/         # Estilos globais
├── third-party/    # Integrações externas
└── utils/          # Funções utilitárias
```

### Detalhamento da Organização
A estrutura principal reside em `src` e segue uma divisão por "áreas de responsabilidade":

### 1. Nível Superior (`src/`)
- **`app.tsx`, `main.tsx`**: Pontos de entrada da aplicação.
- **`router.tsx`**: Define as rotas raiz. O roteador principal delega as áreas protegidas para o componente de Layout/Dashboard.
- **`components/`**: Componentes compartilhados globalmente.
- **`ui/`**: Componentes de UI genéricos (botões, inputs), integrados ao Design System (`reflow.ui`).
- **`common/`**: Componentes de negócio reutilizáveis em vários lugares.

### 2. Dashboard/Layout (`src/dashboard/`)
Este é o coração da aplicação restrita (pós-login).

- **`dashboard.tsx`**: O layout principal contendo Sidebar e Header. Gerencia o roteamento interno das áreas do dashboard.
- **`modules/`**: Contém os Módulos de Negócio.

### 3. Módulos (`src/dashboard/modules/<nome-do-modulo>/`)
Cada pasta aqui representa um grande módulo funcional.

- **`<modulo>.router.tsx`**: Roteador específico do módulo. Define as sub-rotas e navegação interna.
- **Sub-pastas**: Contendo as Páginas/Features específicas do módulo.

### 4. Padrão de Página (`src/dashboard/modules/<modulo>/<feature>/`)
O projeto utiliza fortemente o padrão de **Colocation** (Co-localização). Tudo que é específico de uma página fica dentro da pasta dela:

- **`<feature>.tsx`**: Componente principal da página (Page Controller).
- **`components/`**: Componentes visuais usados apenas nesta página.
- **`hooks/`**: Lógica de estado complexa ou efeitos específicos desta página.
- **`api/`**: Definições de chamadas de API específicas para esta feature.
- **`styles/`**: Arquivos CSS específicos (se necessário).
- **`utils/`**: Funções auxiliares locais.
- **`types/`**: Tipos TypeScript específicos da feature.

## Resumo da Divisão
A divisão é feita de forma hierárquica e fractal: **App ➝ Dashboard (Layout) ➝ Módulo (Router) ➝ Feature (Página)**

Ao criar uma nova funcionalidade, o fluxo recomendado é:
1. Criar uma pasta para a feature dentro do módulo apropriado.
2. Colocar seus componentes, hooks e estilos dentro dessa pasta.
3. Registrar a nova rota e componente no arquivo de roteamento do módulo.
