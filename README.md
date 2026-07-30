# Automação de Testes com Cypress, GitHub Actions e Slack

Este projeto tem como objetivo automatizar cenários de cadastro e login em uma aplicação web utilizando Cypress, com foco em organização, manutenção, rastreabilidade e integração contínua.

## Visão geral

A automação foi estruturada com boas práticas de desenvolvimento, como:

- Automação com Page Object Model (POM)
- Código limpo e organizado
- Reutilização de métodos e ações
- Testes com validações de formulário
- Geração de relatórios HTML
- Captura de screenshots e vídeos em falhas
- Pipeline de CI/CD com GitHub Actions
- Execução agendada via Schedule
- Integração com Slack para notificações automáticas

## Tecnologias utilizadas

- Cypress
- JavaScript
- Faker.js
- Mochawesome Reporter
- GitHub Actions
- Slack

## Estrutura do projeto

```text
cypress/
  e2e/
    cadastro _usuario.cy.js
    login.cy.js
  support/
    pages/
      cadastro_usuario_page.js
      comum_page.js
      home_page.js
      login_page.js
.github/
  workflows/
    cypress-pipeline-scheduler.yml
```

## Cenários automatizados

### Cadastro de usuário

Os testes cobrem validações importantes, como:

- Campo nome vazio
- Campo e-mail vazio
- E-mail inválido
- Senha vazia
- Senha inválida
- Cadastro realizado com sucesso

### Login

Os testes cobrem cenários como:

- E-mail vazio
- E-mail inválido
- Senha vazia
- Senha inválida
- Login realizado com sucesso

## Arquitetura da automação

O projeto foi organizado com foco em manutenção e escalabilidade:

- As ações e seletores das telas foram centralizados em arquivos dentro da pasta de páginas
- Os testes ficaram separados da lógica de interação com a interface
- O código ficou mais legível, reutilizável e fácil de evoluir

## Como executar localmente

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
npm install
```

### Executar os testes

```bash
npm test
```

### Abrir o Cypress em modo interativo

```bash
npm run cypress:open
```

## Relatórios e evidências

Os relatórios gerados pelos testes ficam armazenados em:

```text
cypress/reports/html
```

Além disso, o projeto também gera:

- screenshots em caso de falha
- vídeos da execução
- artefatos salvos no GitHub Actions para análise posterior

## Pipeline CI/CD

A pipeline foi configurada no GitHub Actions para executar os testes automaticamente em um ambiente de integração contínua.

### O que acontece na pipeline

- Faz o checkout do projeto
- Instala as dependências
- Executa os testes com Cypress
- Faz upload de relatórios, screenshots e vídeos como artefatos
- Mantém a execução automática por agendamento

### Execução agendada

A workflow está configurada com Schedule para rodar automaticamente em horários pré-definidos.

## GitHub Actions e Slack

O GitHub Actions é a ferramenta responsável por orquestrar a execução da automação no repositório, enquanto o Slack já está integrado para enviar notificações e facilitar o acompanhamento dos resultados.

Isso permite:
- execução automática sempre que houver alterações no código
- validação contínua do projeto
- acompanhamento rápido de falhas e sucessos
- maior visibilidade para a equipe


## Próximos passos

Algumas melhorias que podem ser adicionadas no futuro:

- Ampliar os cenários de teste
- Melhorar a organização de ambientes e variáveis
- Refinar ainda mais os relatórios e evidências
- Evoluir o monitoramento e a rastreabilidade das execuções