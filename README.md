## Backend Coding Challenge: NestJS Movie API

<p align="center">
  npm v10.5.2, node v20.13.0, docker 20.10.12
</p>

## Description

Was necessary to install on my machine: [NodeJS](https://nodejs.org/en/), [NestJS](https://nestjs.com/), [class-validator](https://www.npmjs.com/package/class-validator), [Docker](https://www.docker.com/), and MySQL

```bash
# NodeJS
$ npm install -g @nestjs/cli

# Class-validator
$ npm install class-validator --save

# MySQL
$ npm install mysql --save
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Running containers at Docker
```bash
$ docker compose up -d
```
Once the containers are up and running, we can access the NestJS application at http://localhost:3000 and phpMyadmin at http://localhost:8080.


## Rebuild our app
To rebuild our app container because of the changes made, we execute the command below:
```
$ docker compose up --build
```