# Reflow Case - Desafio Técnico Fullstack

## 1. Objetivo do Desafio
O objetivo deste case é reproduzir fielmente uma funcionalidade core do produto **Reflow**. Você deve desenvolver uma solução fullstack que contemple a criação e listagem de empresas ("Companies"), seguindo rigorosamente os padrões de arquitetura e design system estabelecidos.

### Funcionalidades Esperadas
1.  **Listagem de Companies:** Tela exibindo as empresas cadastradas no banco de dados.
2.  **Criação de Company:** Formulário para cadastro de novas empresas.

> **Referência Visual:** O desenvolvimento deve seguir o design disponibilizado no **[Figma](https://www.figma.com/design/XciJBEjX6UVkyYXWI3NVL9/Reflow-Case?node-id=0-1&t=AblAplxLvskO1tEj-1)** com a maior fidelidade pixel-perfect possível.

---

## 2. Requisitos Técnicos e Stack

O desenvolvimento do projeto deve espelhar fielmente o ecossistema da Reflow, respeitando integralmente seus três pilares fundamentais. A consulta à pasta `reflow.docs` é **indispensável**, pois contém as diretrizes técnicas e arquiteturais que regem nossa engenharia.

É mandatório a adesão estrita aos seguintes padrões:
- **Codificação:** [CODING_STANDARDS.md](./documents/CODING_STANDARDS.md)
- **Arquitetura:** [ARCHITECTURE.md](./documents/ARCHITECTURE.md)
- **Versionamento:** [CHANGELOG.md](./documents/CHANGELOG.md)
- **Gerenciador de Pacotes:** Obrigatório o uso do **pnpm**.

### Frontend (`reflow.client`)
- **Framework:** React 18 + Vite.
- **Linguagem:** TypeScript.
- **Estilização:** Tailwind CSS.
- **Arquitetura:** Feature-based Colocation (ver [reflow.client.md](./documents/REFLOW_CLIENT.md)).
- **Comunicação:** Orvaljs (geração de cliente API) ou Axios/Fetch padrão seguindo o contrato.

### Backend (`reflow.server`)
- **Framework:** NestJS.
- **Linguagem:** TypeScript.
- **Arquitetura:** Clean Architecture / Layered (Controller -> Service -> Repository).
- **Validação:** Zod + DTOs (Input/Output estritos).
- **Documentação API:** Swagger (OpenAPI).

### Banco de Dados & Infra
- **Banco:** PostgreSQL.
- **ORM:** Prisma (obrigatório para modelagem e migrations).

### Design System (`reflow.ui`)
- Você deve implementar os componentes visuais necessários (ex: Buttons, Inputs, Tables) de forma isolada, seguindo os conceitos do **reflow.ui**.
- **Stack:** Radix UI (headless) + Tailwind CSS + CVA (Class Variance Authority).

---

## 3. Padrões de Desenvolvimento

Para que seu teste seja aceito, você **DEVE** seguir as diretrizes documentadas em `reflow.docs`:

1.  **Nomenclatura:** Siga o [CODING_STANDARDS.md](./documents/CODING_STANDARDS.md) (Inglês, PascalCase para classes, kebab-case para arquivos).
2.  **Organização:**
    - Não misture regras de negócio nos Controllers.
    - Não use estilos inline ou CSS modules; use Tailwind + CVA.
    - **É proibido o uso de variáveis hardcoded de estilos (ex: cores, espaçamentos, fontes, etc) no código. Utilize sempre tokens, utilitários ou variáveis centralizadas do design system/Tailwind.**
    - Mantenha arquivos relacionados a uma feature próximos (Colocation).

> **Atenção:** Também será avaliada a qualidade da modularização do código e a criação de componentes reutilizáveis, especialmente no design system (`reflow.ui`).

---

## 4. Entregáveis

O projeto final deve seguir a seguinte estrutura de entrega:

1.  **Organização no GitHub:** Crie uma **Organization** no GitHub para agrupar os projetos.
2.  **Repositórios Separados:** É obrigatório que a organização contenha exatamente três repositórios, um para cada pilar:
    - `reflow.client`
    - `reflow.server`
    - `reflow.ui`
3.  **Publicação do Design System:** A biblioteca `reflow.ui` deve ser **publicada** como um package (NPM ou GitHub Packages) e consumida externamente pelo `reflow.client`. A publicação do pacote é obrigatória para validação do desafio.

> **Observação:** Disponibilizamos um template com configurações básicas para o `reflow.ui` para facilitar o início do desenvolvimento do design system.
4.  **Documentação:** Instruções claras de como rodar cada projeto.
5.  **Seeds/Mocks:** É **obrigatória** a entrega de script de mock/seed para popular o banco de dados com Companies.

---

## Material de Estudo

### Referências Básicas
- [Conceitos Básicos](./documents/CONCEPTS.md)
- [Links úteis de Estudo](./documents/LINKS.md)
- [Arquitetura](./documents/ARCHITECTURE.md)
- [Padrões de Codificação](./documents/CODING_STANDARDS.md)
- [Padrões de Commit](./documents/CHANGELOG.md)
- [Fundamentos de Git](./documents/GIT.md)

### Referências sobre o projeto
- [Client](./documents/REFLOW_CLIENT.md)
- [Server](./documents/REFLOW_SERVER.md)
- [UI](./documents/REFLOW_UI.md)

---

## Uso de IA

> **Atenção:** O uso de IA é permitido, porém códigos gerados por IA serão analisados e penalizados caso demonstrem falta de entendimento ou más práticas. Utilize IA apenas para auxiliar no desenvolvimento e produtividade, **não para substituir o raciocínio humano**.
