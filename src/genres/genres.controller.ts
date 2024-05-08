import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './genre.entity';

@Controller('genres')
export class GenresController {
    constructor(private readonly genresService: GenresService) {}

    @Get()
    async listGenres(): Promise<Genre[]> {
        return this.genresService.listGenres();
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