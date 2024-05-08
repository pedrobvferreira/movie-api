import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    async listMovies(): Promise<Movie[]> {
        return this.moviesService.listMovies();
    }

    @Post()
    async addMovie(@Body() movieData: Partial<Movie>): Promise<Movie> {
        return this.moviesService.addMovie(movieData);
    }

    @Put(':id')
    async updateMovie(@Param('id') id: number, @Body() movieData: Partial<Movie>): Promise<Movie> {
        return this.moviesService.updateMovie(id, movieData);
    }

    @Delete(':id')
    async deleteMovie(@Param('id') id: number): Promise<void> {
        return this.moviesService.deleteMovie(id);
    }
}