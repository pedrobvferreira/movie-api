import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Movie } from './movie.entity';
import { MovieDto } from './movie.dto';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private moviesRepository: Repository<Movie>,
    ) {}

    async listMovies(): Promise<Movie[]> {
        return this.moviesRepository.find();
    }

    async findMovieById(id: number): Promise<Movie | undefined> {
        const findOneOptions: FindOneOptions<Movie> = { where: { id } };
        return this.moviesRepository.findOne(findOneOptions);
    }

    async findMovieByTitle(title: string): Promise<Movie | undefined> {
        const findOneOptions: FindOneOptions<Movie> = { where: { title } };
        return this.moviesRepository.findOne(findOneOptions);
    }

    async addMovie(movieData: Partial<Movie>): Promise<Movie> {
        const movie = new Movie();
        Object.assign(movie, movieData);
        return this.moviesRepository.save(movie);
    }

    async addMovieDto(movieDto: MovieDto): Promise<Movie> {
        const existingMovie = await this.findMovieByTitle(movieDto.title);
        if (existingMovie) {
          throw new Error('Movie already exists!');
        }
        const movie = new Movie();
        movie.title = movieDto.title;
        movie.description = movieDto.description;
        movie.releaseDate = movieDto.releaseDate;
        movie.genres = movieDto.genres;
        return this.moviesRepository.save(movie);
    }

    async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie> {
        await this.moviesRepository.update(id, movieData);
        return this.findMovieById(id);
    }

    async updateMovieDto(id: number, movieDto: MovieDto): Promise<Movie> {
        const movie = await this.findMovieById(id);
        if (!movie) {
          throw new Error('Movie not found');
        }
        movie.title = movieDto.title;
        movie.description = movieDto.description;
        movie.releaseDate = movieDto.releaseDate;
        movie.genres = movieDto.genres;
        return this.moviesRepository.save(movie);
      }
    
    async deleteMovie(id: number): Promise<void> {
        await this.moviesRepository.delete(id);
    }
}