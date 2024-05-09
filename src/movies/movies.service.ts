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

    async findMoviesPaginated(page: number = 1, limit: number = 10): Promise<Movie[]> {
        return this.moviesRepository.find({
          take: limit,
          skip: (page - 1) * limit,
        });
    }

    async findMovieById(id: number): Promise<Movie> {
        const findOneOptions: FindOneOptions<Movie> = { where: { id } };
        return this.moviesRepository.findOne(findOneOptions);
    }

    async findByTitle(title: string): Promise<Movie[]> {
        return this.moviesRepository.find({ where: { title } });
    }

    async findByGenre(genre: string): Promise<Movie[]> {
        return this.moviesRepository.find({ where: { genre } });
    }

    async addMovie(movieData: Partial<Movie>): Promise<Movie> {
        const movie = new Movie();
        Object.assign(movie, movieData);
        return this.moviesRepository.save(movie);
    }

    async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie> {
        const movie = await this.findMovieById(id);
        if (!movie) {
          throw new Error(`Movie with ID ${id} not found.`);
        }
        await this.moviesRepository.update(id, movieData);
        return this.findMovieById(id);
    }
    
    async deleteMovie(id: number): Promise<void> {
        const movie = await this.findMovieById(id);
        if (!movie) {
          throw new Error(`Movie with ID ${id} not found.`);
        }
        const result = await this.moviesRepository.delete(id);
    }
}