import { IsNotEmpty, IsArray, IsDateString } from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsDateString()
  releaseDate: Date;

  @IsNotEmpty()
  @IsArray()
  genre: string[];
}