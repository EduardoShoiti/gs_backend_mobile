# Projeto Mobile backend API - Tech Splinter

Este projeto é uma API para o backend do aplicativo mobile gerenciar usuários e barreiras, construída com Node.js, Express e SQLite. A API permite criar, listar, atualizar e excluir usuários e barreiras.

## Get Started

- [Instalação](##instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
  - [Usuários](#usuários)
    - [Criar Usuário](#criar-usuário)
    - [Listar Todos os Usuários](#listar-todos-os-usuários)
    - [Obter Usuário por ID](#obter-usuário-por-id)
    - [Atualizar Usuário](#atualizar-usuário)
    - [Deletar Usuário](#deletar-usuário)
  - [Barreiras](#barreiras)
    - [Criar Barreira](#criar-barreira)
    - [Listar Todas as Barreiras](#listar-todas-as-barreiras)
    - [Obter Barreira por ID](#obter-barreira-por-id)
    - [Atualizar Barreira](#atualizar-barreira)
    - [Deletar Barreira](#deletar-barreira)
- [Licença](#licença)

## Instalação

Para instalar e configurar este projeto, siga as instruções abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/EduardoShoiti/gs_backend_mobile.git
   cd gs_backend_mobile
2. Instale as dependências:
   ```bash
   npm install

## Uso

Para iniciar o servidor, execute o seguinte comando:

1. Compile o código para js:
   ```bash
   npx tsc
2. Execute o arquivo compilado:
   ```bash
   node dist/server.js

## Endpoints da API
