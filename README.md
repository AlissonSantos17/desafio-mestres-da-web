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
  NodeJS; :heavy_check_mark:/
  Express ou outro framework; :heavy_check_mark:/
  Banco de Dados relacional; :heavy_check_mark:/
  CRUD de produtos; :heavy_check_mark:/
  Autenticação de Usuário (JWT); :heavy_check_mark:/
  GIT. :heavy_check_mark:/


### Diferenciais:
  Typescript; :heavy_check_mark:/
  Typeorm; :heavy_check_mark:/
  TDD;/
  SOLID;/
  Docker;/
  Front-end para manipulação dos dados./


## :sparkles: Features ##

:heavy_check_mark: Feature 1;

  A primeira feature consiste na criação do usúario onde o mesmo passa os campos de "nome, email, password e se é Admnistrador";/
  Rota -> /users/create = Cria usuario;/
  Parâmetros: Chamada tipo POST./
  
  {
    "name": "admin",
    "email": "admin@gmail.com",
    "password": "123",
    "isAdmin": true
  }

  Após isso, ele faz o login com o usuario e senha e é gerado um token de autenticação;/
  Rota -> /session/login = Faz o login com o usúario e senha e é gerado um token de autenticação;/
  Parâmetros: Chamada tipo POST./

  {
	  "email": "admin@gmail.com",
	  "password": "123"
  }

  Caso o usúario desejar verificar os usuarios cadastrados basta adicionar o token de autenticação ao header para realizar a listagem de usúarios cadastrados;/
  OBS: O token é retornado no response da chamada./
  Parâmetros: Chamada tipo GET./
  Adicionar Token retornado no response ao header./
  Ex de retorno:/

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4YzVmOWRlLTgxOWEtNDQ4Ni1hZjU3LWQ4N2I0NzZkZGNjZiIsImlhdCI6MTYxNTI0NDc5MSwiZXhwIjoxNjE1MzMxMTkxfQ.iFJaitp7vOH5W71y3LauS7zJlkECdnO9rLmKgc3BcCE"

  Rota -> /users/listUsers = Verifica usúarios cadastrados na base de dados;/

:heavy_check_mark: Feature 2;
  A segunda feature consiste no CRUD dos produtos, é importante ressaltar que o usúario só poderá realizar o CRUD se estiver autenticado no sistema, ou seja, precisa fazer o login e pegar o token de autenticação e adicionar ao header./
  Parâmetros: Chamada tipo POST./
  Rota -> /products/create = É criado o produto informado por seus parametros;/

  {
    "name": "BONE",
    "price": 55.25,
    "size": "G",
    "color": "CINZA",
    "sku": "BN-55-CN-G",
    "description": "BONE TAMANHO G - COR CINZA - PREÇO R$ 55.25 - SKU BONE-55.25-CN-G"
  } 

  Após isso, basta verificar quais produtos estão cadastrados na base;/
  Obs: Só é possivel verificar se o token estiver adicionado ao header./
  Parâmetros: Chamada tipo GET./
  Rota -> /products/list = É criado o produto informado por seus parametros;/
  É retornada a lista de produtos cadastrados na base de dados/

  /products/updateProduct/:id

:heavy_check_mark: Feature 3;

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
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/AlissonSantos17" target="_blank">Alisson Santos</a>

&#xa0;

<a href="#top">Back to top</a>
