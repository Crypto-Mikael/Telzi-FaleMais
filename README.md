# Boas vindas ao Repositorio do Projeto Telzi-FaleMais!

Esse projeto é uma pagina web básica de calculo de Origem e Destino de uma empresa de telefonia, especializada em chamadas de longa distância nacional, com o preço sendo pré-definido em uma lista com os códigos DDDs o site deixa a disposição do usuario selecionar os campos para faz o calculo.

# Sumário

- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Como executar](#como-executar)
- [Endpoints do projeto](#endpoints-do-projeto)
- [Front-end do projeto](#front-end-do-projeto)
- [Agradecimentos](#agradecimentos)
- [Encontre-me](#encontre-me)


Esse projeto tem como intuito aprender novas tecnologias e reforçar as já aprendidas sendo elas:

- NodeJS
- TypeScript
- MySQL
- Uso de princípios SOLID.
- Uso de banco de dados relacional.
- Teste unitário.
- TypeScript.
- Documentação.
- Programação em Inglês.


## O que foi desenvolvido

Foi arquitetado, uma API de CRUD de DDDs com Relações de Origem e Destino com preços. 
Foi desenvolvido alguns endpoints (seguindo o princípios do REST) que estarão conectados ao seu banco de dados local.

![english_database](https://user-images.githubusercontent.com/80548535/153692142-e8a7a89d-93b0-40d8-8a33-0507ae261326.png)

## Como executar

1 - Crie um arquivo .env utilizando o .env.example como base.

2 - Dentro da pasta do projeto abra um terminal instale as dependecias, crie o banco e estancie o back-end.

#### Yarn

```bash
cd back_end/
yarn install
yarn build:db
yarn dev
```

#### NPM

```bash
cd back_end/
npm install
npm build:db
npm run dev
```

2.5 - Se você quiser rodar os testes de back-end eles droparam a database.

#### Yarn

```bash
cd back_end/
yarn install
yarn test
```

#### NPM

```bash
cd back_end/
npm install
npm test
```

3 - Dentro da pasta do projeto abra um terminal instale as dependecias e estancie o front-end.

#### Yarn

```bash
cd front-end/
yarn install
yarn start
```

#### NPM

```bash
cd front-end/
npm install
npm start
```

## Endpoints do projeto

### Tabela de DDDs

1 - Requisição ao endpoint POST `/DDDs`

![DDDs - CREATE](https://user-images.githubusercontent.com/80548535/153692261-6052683f-e6a8-40a8-b2df-70fbd1e59976.png)

#### Os seguintes pontos são avaliados:

- O campo `description` deverá existir, não estar em branco e ser um DDD valido (3 digitos o primeiro sendo 0);

```json
{
  "message": "\"description\" is required"
}
```
- Caso contrário, retornará um json com o DDD criado

```json
{
  "description": "020",
  "id_DDDs": 6
}
```

2 - Requisição ao endpoint GET `/DDDs`

![DDDs - GET](https://user-images.githubusercontent.com/80548535/153692444-c4ff589f-5812-4fb4-8830-939c467c6f66.png)

- Quando algum DDD existir o endpoint retornará o seguinte:

```json
[
  {
    "description": "011",
    "id_DDDs": 1
  },
  {
    "description": "016",
    "id_DDDs": 2
  },
  {
    "description": "017",
    "id_DDDs": 3
  },
  ...
 ]
```

3 - Requisição ao endpoint PUT `/DDDs/:ID`

![DDDs - PUT](https://user-images.githubusercontent.com/80548535/153692512-cabd410c-2831-409d-9301-8187e6d90067.png)

#### Os seguintes pontos são avaliados:

- O campo `description` deverá existir, não estar em branco e ser um DDD valido (3 digitos o primeiro sendo 0);

```json
{
  "message": "\"description\" is required"
}
```
- Caso contrário, retornará um json com o DDD criado

```json
{
  "id_DDDs": 5,
  "description": "027"
}
```

4 - Requisição ao endpoint DELETE `/DDDs/:ID`

![DDDs - DELETE](https://user-images.githubusercontent.com/80548535/153693017-f16238ba-407d-44b1-bc86-f8950339cc11.png)

#### Os seguintes pontos são avaliados:

- Caso o DDD exista, retornará um json com o DDD deletado;

```json
{
  "description": "020",
  "id_DDDs": 6
}
```
- Caso contrário, retornará um a seguinte messagem de erro;

```json
{
  "message": "DDD not finded"
}
```
### Tabela de OriginDestiny

1 - Requisição ao endpoint POST `/OriginDestiny`

![Origin Destiny - POST](https://user-images.githubusercontent.com/80548535/153693160-dc914de7-6299-42dc-88d2-ab8659e9cfd7.png)

#### Os seguintes pontos são avaliados:

- O campo `origin` deverá existir, não estar em branco e ser um tipo number;
- O campo `destiny` deverá existir, não estar em branco e ser um tipo number;
- O campo `value` deverá existir, não estar em branco e ser um tipo number;

```json
{
  "message": "\"campo\" is required"
}
```
- Caso contrário, retornará um json com o campo OriginDestiny criado:

```json
{
  "value": 1.7,
  "origin": 6,
  "destiny": 4
}
```

2 - Requisição ao endpoint GET `/OriginDestiny`

![Origin Destiny - GET](https://user-images.githubusercontent.com/80548535/153693302-45706794-8a29-4807-9435-d931bc0a274b.png)

- Quando algum DDD existir o endpoint retornará o seguinte:

```json
[
  {
    "value": 1.9,
    "id_origin_destiny": 1,
    "origin": {
      "description": "011",
      "id_DDDs": 1
    },
    "destiny": {
      "description": "016",
      "id_DDDs": 2
    }
  },
  {
    "value": 2.9,
    "id_origin_destiny": 2,
    "origin": {
      "description": "016",
      "id_DDDs": 2
    },
    "destiny": {
      "description": "011",
      "id_DDDs": 1
    }
  },
  ...
]
```

3 - Requisição ao endpoint PUT `/OriginDestiny/:ID`

![Origin Destiny - PUT ](https://user-images.githubusercontent.com/80548535/153693461-00d0df11-8331-4d7e-898b-8f1be8559c79.png)

#### Os seguintes pontos são avaliados:

- O campo `origin` deverá existir, não estar em branco e ser um tipo number;
- O campo `destiny` deverá existir, não estar em branco e ser um tipo number;
- O campo `value` deverá existir, não estar em branco e ser um tipo number;

```json
{
  "message": "\"campo\" is required"
}
```
- Caso contrário, retornará um json com o DDD criado

```json
{
  "id_origin_destiny": 7,
  "origin": 3,
  "destiny": 2,
  "value": 1.9
}
```

4 - Requisição ao endpoint DELETE `/OriginDestiny/:ID`

![Origin Destiny - DELETE](https://user-images.githubusercontent.com/80548535/153694343-d0715bbf-d5f5-4236-be89-e41791409635.png)

#### Os seguintes pontos são avaliados:

- Caso o OriginDestiny exista, retornará um json com o DDD deletado;

```json
{
  "value": 0.9,
  "id_origin_destiny": 5
}
```
- Caso contrário, retornará um a seguinte messagem de erro;

```json
{
  "message": "id OriginDestiny not finded"
}
```

## Front-end do projeto

![DDDS](https://user-images.githubusercontent.com/80548535/153694667-485a91b3-9306-4057-8768-69a8b76fc2aa.gif)

## Agradecimentos

Agradeço imensamente pela <a href="https://www.loldesign.com.br/">LolDesign</a> pela iniciativa de começar esse projeto e pela toda equipe da <a href="https://www.betrybe.com/">Trybe</a> que vem me formando como um profissonal altamente competente.

## Encontre-me
[![Linkding](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miguel-campos-6b7243203/)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:1hamander@gmail.com)
