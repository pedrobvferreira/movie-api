import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    
    async addGenre(genreData: Partial<Genre>): Promise<Genre> {
        const genre = new Genre();
        Object.assign(genre, genreData);
        return this.genresRepository.save(genre);
    }
    
    async deleteGenre(id: number): Promise<void> {
        await this.genresRepository.delete(id);
    }
}