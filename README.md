<h1 align="center">
Movies API
</h1>

<p align="center">API simples feita para armazenar e ler dados de filmes, tais como nome, descrição, ano de duração e mais.</p>

# 📋 Índice

- [Sobre o projeto](#-Sobre-o-projeto)
- [Tecnologias utilizadas](#-Tecnologias-utilizadas)
- [Rodando o projeto](#-Rodando-o-projeto)
  - [Pré-requisitos](#-Pré-requisitos)
  - [Rodando o server](#-Rodando-o-server)

## 📃 Sobre o projeto

Desenvolvida utilizando a versão 5 do orm Adonis, utilizando typescript e conceitos RESTful. a API conta com autenticação e proteção da rotas com a utilização de token.

<a href="https://raw.githubusercontent.com/thiagosprestes/adonis_movies_api/master/adonis_movies_api_endpoints.json" download style={text-align: center}>Endpoints da API no insomnia</a>

## 🛠 Tecnologias utilizadas

- 🖥 **Adonis** — ORM responsável pela comunicação com o banco de dados, rotas, controllers, models e migrations da API.
- 🎲 **PostgreSQL** — Banco de dados utilizado para armazenar as informações.

## 🚀 Rodando o projeto

### Pré-requisitos

- NodeJS
- Yarn

### 💻 Rodando o server

Clone o repositório

```bash

# Clona o repositório
git clone https://github.com/thiagosprestes/adonis_movies_api

```

Navegue até a pasta do projeto clonado e execute os comandos abaixo

```bash

# Instala as dependências do projeto
yarn

# Inicia o server
yarn dev

```

Após isso crie uma cópia do arquivo .env.example e renomeie o arquivo como .env.

Preencha as informações vazias no arquivo com as informações de conexão do seu banco de dados.

A seguir gere uma app key utilizando o seguinte comando

```bash

node ace generate:key

```

Após isso preencha as linhas NODE_ENV e APP_KEY da seguinte maneira

```bash

NODE_ENV=development
APP_KEY=Wgr="Sua chave gerada no terminal"

```

Após seguir todos os passos acima inicie o backend com o seguinte comando

```bash

#Inicia a aplicação
yarn dev

```
