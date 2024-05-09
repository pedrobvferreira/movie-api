import { Controller, Get, Post, Delete, Param, Body, Query } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './genre.entity';
import { ApiOperation, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
    constructor(private readonly genresService: GenresService) {}

    @ApiOperation({ summary: 'List all genres' })
    @ApiResponse({ status: 200, description: 'Returns an array of genres', type: Genre, isArray: true })
    @Get()
    async listGenres(): Promise<Genre[]> {
        return this.genresService.listGenres();
    }

    @ApiOperation({ summary: 'Find genres with pagination' })
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page', example: 10 })
    @ApiResponse({ status: 200, description: 'Returns an array of genres with pagination', type: Genre, isArray: true })
    @Get("/paginated")
    async findGenresPaginated(@Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<Genre[]> {
        return this.genresService.findGenresPaginated(page, limit);
    }

    @ApiOperation({ summary: 'Add a new genre' })
    @ApiResponse({ status: 201, description: 'Returns the newly created genre', type: Genre })
    @Post()
    async addGenre(@Body() genreData: Partial<Genre>): Promise<Genre> {
        return this.genresService.addGenre(genreData);
    }

    @ApiOperation({ summary: 'Delete a genre by ID' })
    @ApiResponse({ status: 204, description: 'Genre successfully deleted' })
    @ApiResponse({ status: 404, description: 'Genre not found' })
    @Delete(':id')
    async deleteGenre(@Param('id') id: number): Promise<void> {
        return this.genresService.deleteGenre(id);
    }
}