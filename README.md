## Backend Coding Challenge: NestJS Movie API

<p align="center">
  npm v10.5.2, node v20.13.0, docker 20.10.12
</p>

## Description
Was necessary to install on my machine: [NodeJS](https://nodejs.org/en/), [NestJS](https://nestjs.com/), [class-validator](https://www.npmjs.com/package/class-validator), and MySQL

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

## Install the DB
1. Install Xampp
2. Acess http://localhost/phpmyadmin/ and create the database 'movies'

## Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API endpoints.
Access the NestJS application at http://localhost:3000

- List Movies
```
GET
http://localhost:3000/movies
```
- Add Movie
```
POST
http://localhost:3000/movies

Body
{
    "title":"teste",
    "description":"teste",
    "releaseDate": null,
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
    "releaseDate": null,
    "genres": []
}
```
- Delete Movie
```
DELETE
http://localhost:3000/movies/1
```

- List Genres
```
GET
http://localhost:3000/genres
```
---------------------
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