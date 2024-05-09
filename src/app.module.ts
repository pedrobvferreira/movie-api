import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/movie.entity';
import { Genre } from './genres/genre.entity';
import { MoviesModule } from './movies/movies.module'; // Import MoviesModule
import { GenresModule } from './genres/genres.module'; // Import GenresModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'movies',
      entities: [Movie, Genre],
      //don't use in real projects
      synchronize: true,
      autoLoadEntities: true,
    }),
    // Import modules for movies and genres here
    MoviesModule,
    GenresModule
  ],
})
export class AppModule {}
