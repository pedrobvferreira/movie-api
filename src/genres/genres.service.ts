import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Genre } from './genre.entity';

@Injectable()
export class GenresService {
    constructor(
        @InjectRepository(Genre)
        private genresRepository: Repository<Genre>,
    ) {}
    
    async listGenres(): Promise<Genre[]> {
        return this.genresRepository.find();
    }

    async findGenresPaginated(page: number = 1, limit: number = 10): Promise<Genre[]> {
        return this.genresRepository.find({
          take: limit,
          skip: (page - 1) * limit,
        });
    }
    
    async addGenre(genreData: Partial<Genre>): Promise<Genre> {
        const genre = new Genre();
        Object.assign(genre, genreData);
        return this.genresRepository.save(genre);
    }

    async findGenreById(id: number): Promise<Genre> {
        const findOneOptions: FindOneOptions<Genre> = { where: { id } };
        return this.genresRepository.findOne(findOneOptions);
    }
    
    async deleteGenre(id: number): Promise<void> {
        const genre = await this.findGenreById(id);
        if (!genre) {
            throw new Error(`Genre ID: ${id} not found`);
        }
        await this.genresRepository.delete(id);
    }
}