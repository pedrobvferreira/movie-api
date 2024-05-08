## Backend Coding Challenge: NestJS Movie API

<p align="center">
  npm v10.5.2, node v20.13.0, docker 20.10.12
</p>

## Description

Was necessary to install on my machine: [NodeJS](https://nodejs.org/en/), [NestJS](https://nestjs.com/), [class-validator](https://www.npmjs.com/package/class-validator), [Docker](https://www.docker.com/), and Postgres

```bash
# NodeJS
$ npm install -g @nestjs/cli

# Class-validator
$ npm install class-validator --save
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
## Running the containers at Docker
```bash
$ docker compose up
```
Once the containers are up and running, we can access the NestJS application at http://localhost:3000 and pgAdmin at http://localhost:5050.

## Setting up pgAdmin and PostgreSQL
Here are the steps to create a server in PgAdmin:

1. Open PgAdmin in the web browser by visiting http://localhost:5050 (assuming we're using the default configuration in the docker-compose.yml file).
2. Log in using your email and password in the docker-compose.yml file for the pgadmin service:
  - user: admin@admin.com
  - pass: pgadmin4
3. In the left-hand sidebar, click Servers to expand the Servers menu.
4. Right-click on Servers and select Register -> Server.
5. In the General tab of the Create - Server dialog, we can give the server a name of our choice.
6. In the Connection tab, fill in the following details:
- Host name/address: db
- Port: 5432
- Maintenance database: postgres
- Username: postgres
- Password: postgres
Click Save to save the server configuration.

## Connecting to PostgreSQL Server from NestJS
```bash
# Postgres
$ npm install --save @nestjs/typeorm typeorm pg
```

To rebuild our app container because of the changes made, we execute the command below:
```
$ docker compose up --build
```