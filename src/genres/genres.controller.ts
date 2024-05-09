import { Controller, Get, Post, Delete, Param, Body, Query } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './genre.entity';

@Controller('genres')
export class GenresController {
    constructor(private readonly genresService: GenresService) {}

    @Get()
    async listGenres(): Promise<Genre[]> {
        return this.genresService.listGenres();
    }

    @Get()
    async findGenresPaginated(@Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<Genre[]> {
        return this.genresService.findGenresPaginated(page, limit);
    }

    @Post()
    async addGenre(@Body() genreData: Partial<Genre>): Promise<Genre> {
        return this.genresService.addGenre(genreData);
    }

    @Delete(':id')
    async deleteGenre(@Param('id') id: number): Promise<void> {
        return this.genresService.deleteGenre(id);
    }
}