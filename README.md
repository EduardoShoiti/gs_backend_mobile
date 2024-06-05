# Projeto Mobile backend API - Tech Splinter

Este projeto é uma API para o backend do aplicativo mobile gerenciar usuários e barreiras, construída com Node.js, Express e SQLite. A API permite criar, listar, atualizar e excluir usuários e barreiras.

## Get Started

- [Instalação](#instalação)
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
O servidor será iniciado em http://localhost:3333.

## Endpoints da API

### Usuários
#### Criar Usuário: 
localhost:3333/usuarios

POST /usuarios
```json
  // Request body
  {
    "email": "user@example.com",
    "senha": "senha123",
    "qtdLimpezaBarreira": 5
  }
```


#### Listar Todos os Usuários: 
localhost:3333/usuarios

GET /usuarios


#### Obter Usuário por ID: 
localhost:3333/usuarios/1

GET /usuarios/:id


#### Atualizar Usuário: 
localhost:3333/usuarios/1

PUT /usuarios/:id
```json
// Request body
{
  "email": "user_updated@example.com",
  "senha": "senha1234",
  "qtdLimpezaBarreira": 10
}
```


#### Deletar Usuário: 
localhost:3333/usuarios/1

DELETE /usuarios/:1


### Barreiras
#### Criar barreira: 
localhost:3333/barreiras

POST /barreiras
```json
  // Request body
  {
    "localizacao": "Local X",
    "capacidadeMax": 100,
    "DataCapacidade": "2024-06-03",
    "id_usuario": 1
  }
```


#### Listar Todas as Barreiras: 
localhost:3333/barreiras

GET /barreiras


#### Obter Barreira por ID: 
localhost:3333/barreiras/1

GET /barreiras/:id


#### Atualizar Barreira: 
localhost:3333/barreiras/1

PUT /usuarios/:id
```json
// Request body
{
  "localizacao": "Local Y",
  "capacidadeMax": 150,
  "DataCapacidade": "2024-06-04",
  "id_usuario": 1
}
```


#### Deletar Barreira: 
localhost:3333/barreiras/1

DELETE /barreiras/:1
