import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNewsDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
  })
  title: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    required: false,
  })
  text: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    required: false,
  })
  author: string;
}
