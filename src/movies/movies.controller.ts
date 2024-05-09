import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';
import { ApiOperation, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @ApiOperation({ summary: 'Get all movies' })
    @ApiResponse({ status: 200, description: 'Return all movies.' })
    @Get()
    async listMovies(): Promise<Movie[]> {
        return this.moviesService.listMovies();
    }

    @ApiOperation({ summary: 'Get paginated movies' })
    @ApiResponse({ status: 200, description: 'Return paginated movies.' })
    @ApiQuery({ name: 'page', type: Number, required: false })
    @ApiQuery({ name: 'limit', type: Number, required: false })
    @Get("/paginated")
    async findMoviesPaginated(@Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<Movie[]> {
        return this.moviesService.findMoviesPaginated(page, limit);
    }

    @ApiOperation({ summary: 'Add a new movie' })
    @ApiResponse({ status: 201, description: 'The movie has been successfully created.' })
    @Post()
    async addMovie(@Body() movieData: Partial<Movie>): Promise<Movie> {
        return this.moviesService.addMovie(movieData);
    }

    @ApiOperation({ summary: 'Update a movie by ID' })
    @ApiResponse({ status: 200, description: 'The movie has been successfully updated.' })
    @Put(':id')
    async updateMovie(@Param('id') id: number, @Body() movieData: Partial<Movie>): Promise<Movie> {
        return this.moviesService.updateMovie(id, movieData);
    }

    @ApiOperation({ summary: 'Delete a movie by ID' })
    @ApiResponse({ status: 204, description: 'The movie has been successfully deleted.' })
    @Delete(':id')
    async deleteMovie(@Param('id') id: number): Promise<void> {
        return this.moviesService.deleteMovie(id);
    }

    @ApiOperation({ summary: 'Search movies by title or genre' })
    @ApiResponse({ status: 200, description: 'Return movies matching the search criteria.' })
    @ApiQuery({ name: 'title', type: String, required: false })
    @ApiQuery({ name: 'genre', type: String, required: false })
    @Get('/search')
    async searchMovies(@Query('title') title: string, @Query('genre') genre: string): Promise<Movie[]> {
    if (title) {
      return this.moviesService.findByTitle(title);
    } else if (genre) {
      return this.moviesService.findByGenre(genre);
    } else {
      return [];
    }
  }
}