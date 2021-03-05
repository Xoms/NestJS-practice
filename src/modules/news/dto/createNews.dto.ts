import { IsNumber, IsNotEmpty, IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsDto {
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  id: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  title: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  text: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
  })
  author: string;
}
