import {
  IsNumberString,
  IsNotEmpty,
  IsString,
  IsDefined,
} from 'class-validator';

export class CreateNewsDto {
  @IsDefined()
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  author: string;
}
