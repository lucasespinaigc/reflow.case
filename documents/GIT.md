# Fundamentos de Git utilizados no projeto

Este guia cobre os conceitos essenciais de versionamento para garantir um fluxo de trabalho organizado e seguro.

## 1. Sistema de Branches e Fluxo de Trabalho

Não trabalhamos diretamente na branch `main` (ou `master`). Para cada nova funcionalidade ou correção, criamos uma "cópia" do projeto para trabalhar isoladamente.

-   **Branch Principal (`development`):** Contém o código de produção, testado e funcionando. Ninguém commita diretamente aqui.
-   **Feature Branch:** Criada a partir da development para desenvolver algo novo.
    -   Padrão de nome: `feat/nome-da-funcionalidade` ou `fix/nome-do-bug`.
    -   Exemplo: `feat/login-page`, `fix/header-alignment`.

**Comando:** `git checkout -b feat/minha-feature`

## 2. Pull Request (PR)

Uma **Pull Request** (ou Merge Request) é um pedido para que suas alterações sejam integradas à branch principal. É o momento onde o trabalho "sai" da sua máquina e fica disponível para revisão.

### Review (Revisão de Código)
Para que uma PR seja mergeada (aceita), é **obrigatório** que outro desenvolvedor revise o código.
-   O revisor verifica se o código segue os padrões, se não tem bugs óbvios e se a lógica faz sentido.
-   Se houver problemas, o revisor solicita mudanças ("Request Changes").
-   Se estiver tudo certo, o revisor aprova ("Approve").

**Regra de Ouro:** Nenhuma PR entra na `development` sem aprovação "Code Owner" ou de um colega.

## 3. Merge (Fusão)

O **Merge** é a ação de pegar o código da sua branch (ex: `feat/login`) e misturá-lo com a branch de destino (ex: `development`).
-   Isso acontece automaticamente ao clicar no botão "Merge" no GitHub/GitLab após a aprovação da PR.
-   Após o merge, sua funcionalidade passa a fazer parte oficial do projeto.

## 4. Conflitos

Conflitos acontecem quando duas pessoas mexem na **mesma linha do mesmo arquivo** ao mesmo tempo. O Git não sabe qual versão é a correta e pede ajuda para decidir.

### Como resolver:
1.  O VSCode mostrará marcações no arquivo conflitante (`<<<<<<< HEAD` ... `>>>>>>> feature`).
2.  Você deve escolher se quer manter o "Current Change" (o que estava lá), "Incoming Change" (o que você fez) ou "Accept Both" (os dois).
3.  Após resolver manualment e salvar, você faz um novo commit finalizando a resolução.

## 5. Git Stash

Imagine que você está no meio de uma tarefa complexa, com arquivos bagunçados, mas precisa trocar de branch urgentemente para corrigir um bug crítico. Você não quer fazer um commit de código quebrado.

O **Git Stash** "guarda" suas alterações temporariamente num bolso (stash).
-   `git stash`: Limpa sua área de trabalho, salvando as mudanças.
-   `git stash pop`: Devolve as mudanças salvas para sua área de trabalho.

## 6. Extensão Git do VSCode

O VSCode possui uma integração nativa poderosa com Git (ícone de "Source Control" na barra lateral esquerda).

-   **Visualização de Diff:** Mostra claramente o antes e depois de cada arquivo alterado.
-   **Stage/Unstage:** Permite escolher arquivo por arquivo (ou linha por linha) o que vai entrar no commit clicando no `+`.
-   **Resolve Conflicts:** Interface visual amigável para resolver conflitos com botões coloridos para aceitar mudanças.
-   **Commit:** Permite fazer um commit direto do VSCode.
-   **Pull:** Permite fazer um pull direto do VSCode.
-   **Push:** Permite fazer um push direto do VSCode.
-   **Pull Request:** Permite fazer um pull request direto do VSCode.
-   **Merge:** Permite fazer um merge direto do VSCode.
-   **Stash:** Permite fazer um stash direto do VSCode.
-   **Branch:** Permite criar e trocar de branches direto do VSCode.

Use essa ferramenta a seu favor para evitar decorar dezenas de comandos de terminal no início!

### Outras Extensões Recomendadas

Além da integração nativa, recomendamos fortemente:

-   **GitLens:** Adiciona "superpoderes" ao VSCode. Mostra quem editou cada linha (blame) e quando, histórico detalhado de arquivos e muito mais.
-   **Git Graph:** Uma visualização gráfica bonita da árvore de commits, branches e merges, similar a ferramentas como GitKraken ou Sourcetree.
