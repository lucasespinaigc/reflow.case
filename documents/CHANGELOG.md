# Changelog - Padrão de Commits

Utilizamos o padrão de commits [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para manter um histórico claro e organizado das mudanças no projeto. Este padrão facilita a geração automática de changelogs, versionamento semântico e comunicação entre os membros da equipe.

## Estrutura e Tipos

O padrão define os seguintes tipos principais e suas correlações com o Versionamento Semântico:

- **fix:** Corrige um bug na base de código (correlaciona-se com **PATCH** no Versionamento Semântico).
- **feat:** Introduz uma nova funcionalidade na base de código (correlaciona-se com **MINOR** no Versionamento Semântico).
- **BREAKING CHANGE:** Um commit que possui um rodapé `BREAKING CHANGE:`, ou adiciona um `!` após o tipo/escopo, introduz uma mudança que quebra a compatibilidade da API (correlaciona-se com **MAJOR** no Versionamento Semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.

### Outros Tipos Permitidos

Outros tipos são permitidos e encorajados (baseado na convenção Angular):

- **build:** Alterações que afetam o sistema de build ou dependências externas.
- **chore:** Atualizações de tarefas de build, ferramentas ou bibliotecas auxiliares sem afetar o código de produção.
- **ci:** Alterações em arquivos de configuração e scripts de CI.
- **docs:** Alterações apenas na documentação.
- **style:** Alterações que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula faltando, etc).
- **refactor:** Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade.
- **perf:** Uma alteração de código que melhora o desempenho.
- **test:** Adição de testes ausentes ou correção de testes existentes.
- **revert:** Reversão de um commit anterior.

Rodapés (footers) além de `BREAKING CHANGE: <descrição>` podem ser fornecidos e seguem uma convenção similar ao formato git trailer.

