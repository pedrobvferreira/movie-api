## Backend Coding Challenge: NestJS Movie API

<p align="center">
  npm v10.5.2, node v20.13.0, docker 20.10.12
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
I try to running containers at Docker, but get some errors, even so to build the app would be
```bash
$ docker compose up --build
```

If the containers where up and running, we can access the NestJS application at http://localhost:3000 and phpMyadmin at http://localhost:8080.
