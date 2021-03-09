<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Desafio Mestres Da Web" />

  &#xa0;

  <!-- <a href="https://desafiomestresdaweb.netlify.app">Demo</a> -->
</div>

<h1 align="center">Desafio Mestres Da Web</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/AlissonSantos17/desafio-mestres-da-web?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/AlissonSantos17/desafio-mestres-da-web?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/AlissonSantos17/desafio-mestres-da-web?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/AlissonSantos17/desafio-mestres-da-web?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/AlissonSantos17/desafio-mestres-da-web?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/AlissonSantos17/desafio-mestres-da-web?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/AlissonSantos17/desafio-mestres-da-web?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Desafio Mestres Da Web 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/AlissonSantos17" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Primeiramente queria agradecer a equipe Mestres da Web por me da essa chance para mostrar meus conhecimentos abtidos até hoje nesse desafio.

Com o atual cenário da pandemia, as empresas de todos os seguimentos tiveram que acelerar seu processo tecnológico, afim de continuar entregando valor para seu consumidor.

Sendo assim, crie um sistema capaz de gerenciar o estoque de uma loja virtual de roupas, em que apenas o administrador da plataforma seja capaz de criar, listar, editar e deletar produtos.

Todos os produtos devem apresentar a opção de cadastros de SKUs, ou seja, de variações do mesmo produto, indicando a quantidade correspondente a cada SKU. Ex: Camiseta com tamanhos P, M, G; Tênis com tamanhos 39, 40, 41, 42.

## O que foi usado no projeto:

### REQUISITOS:
  NodeJS; :heavy_check_mark:

  Express ou outro framework; :heavy_check_mark:

  Banco de Dados relacional; :heavy_check_mark:

  CRUD de produtos; :heavy_check_mark:

  Autenticação de Usuário (JWT); :heavy_check_mark:

  GIT. :heavy_check_mark:

### Diferenciais:
  Typescript; :heavy_check_mark:

  Typeorm; :heavy_check_mark:

  TDD;

  SOLID;

  Docker;

  Front-end para manipulação dos dados.


## Endpoints

### /users

-   `POST`: /create : Cria novo usuario.
-   `GET`: /listUsers : Lista todos os usúarios da base de dados.

### /session/login

-   `POST`: Faz login e é retornado no response um token para autenticação que será utilizado ao realizar o CRUD de objetos.

### /products/
- É necessario colocar o token de autorização criado ao iniciar o login retornado no response;

-   `POST`: /create : Lista todos os dados de um único contato;
-   `GET `: /listProducts : Lista todos os produtos cadastrado na base de dados;
-   `PUT`: /updateProduct/:id : Faz o update de produto passando o id como parâmetro;
-   `DELETE`: /delete/:id : Deleta produto passando o ID como parâmetro;

### /stock/
- É necessario colocar o token de autorização criado ao iniciar o login retornado no response;

-   `POST`: /:id : Cria um stock de produto passando ID como parâmetro;
-   `GET `: /:id : Lista o Stock de produto passando o ID como parâmetro;


## :rocket: Technologies ##

The following tools were used in this project:

- [Express](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Typeorm](https://typeorm.io/#/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/AlissonSantos17/desafio-mestres-da-web

# Access
$ cd desafio-mestres-da-web

# Install dependencies
$ yarn

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/AlissonSantos17" target="_blank">Alisson Santos</a>

&#xa0;

<a href="#top">Back to top</a>
