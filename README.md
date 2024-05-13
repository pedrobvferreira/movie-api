## Backend Coding Challenge: NestJS Movie API

<p align="center">
  npm v10.5.2, node v20.13.0, MyQSL, Swagger
</p>

## Description
Was necessary to install on my machine:
1. [NodeJS](https://nodejs.org/en/)
2.  [NestJS](https://nestjs.com/), 
3.  [class-validator](https://www.npmjs.com/package/class-validator)
4.  [MySQL](https://docs.nestjs.com/techniques/database)
5.  [Swagger](https://docs.nestjs.com/openapi/introduction)

```bash
# NodeJS
$ npm install -g @nestjs/cli

# Class-validator
$ npm install class-validator --save

# MySQL
$ npm install mysql --save

# Swagger
$ npm install --save @nestjs/swagger swagger-ui-express
```

## Installation
```bash
$ npm install
```

## Install the DB
1. Install [Xampp](https://www.apachefriends.org/download.html)
2. Acess [phpmyadmin](http://localhost/phpmyadmin/) and create the database 'movies'
3. I changed Xampp to run MySQL on the port 3307 (port already in use), so the port of app.module.ts is 3307 (normally is 3306)
```bash
TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      ...
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
## Swagger UI
To see the swagger page only enter in the following link:
http://localhost:3000/api

## API endpoints.
Access the NestJS application at http://localhost:3000

- List Movies without pagination
```
GET
http://localhost:3000/movies
```
- List Movies  with pagination
```
GET
http://localhost:3000/movies/paginated?page=1&limit=1
```

- Add Movie
```
POST
http://localhost:3000/movies

Body
{
    "title":"teste",
    "description": "teste",
    "releaseDate": "2024-09-05T09:23:00.42Z",
    "genres": []
}
```
- Update Movie
```
PUT
http://localhost:3000/movies/1

Body
{
    "title":"teste",
    "description":"teste",
    "releaseDate": "2024-09-05T09:23:00.42Z",
    "genres": []
}
```
- Delete Movie
```
DELETE
http://localhost:3000/movies/1
```
- Search Movies
```
GET
http://localhost:3000/movies/search?title=teste&genre=M
```
---------------------
- List Genres without pagination
```
GET
http://localhost:3000/genres
```

- List Genres with pagination
```
GET
http://localhost:3000/genres/paginated?page=1&limit=1
```
- Add Genre
```
POST
http://localhost:3000/genres

Body
{
    "name":"teste"
}
```
- Delete Genre
```
DELETE
http://localhost:3000/genres/1
```

---------------------
## Extras 
To put running the app in containers with Docker, we need to do the following

1. Building the containers
```bash
$ docker compose up
```
2. Once the containers are up and running, we can access pgAdmin by visiting http://localhost:5050 in our web browser.
Login to pgAdmin by using the email and password in the docker-compose.yml file:
- email: admin@admin.com
- pass: pgadmin4

3. Setting up pgAdmin and PostgreSQL

In the left-hand sidebar, click Servers to expand the Servers menu, select Register -> Server

In the Connection tab, fill in the following details:
- Host name/address: db
- Port: 5432
- Maintenance database: postgres
- Username: postgres
- Password: postgres

Click Save to save the server configuration.

4. Connecting to PostgreSQL Server from NestJS
```bash
$ npm install --save @nestjs/typeorm typeorm pg
```

5. Next, in the app.module.ts file, change the following code:
```bash
TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
}),
```

6. Finally, Run
```bash
$ docker compose up --build
```