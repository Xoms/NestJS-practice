import {
  Controller,
  Body,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto, UpdateNewsDto } from './dto';
import INews from './news.interface';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  //  add DTO
  // class validator
  //  swagger

  @Get()
  async getAllNews(): Promise<Array<INews>> {
    return this.newsService.getAll();
  }

  @Get(':id')
  async getNewsById(@Param('id', ParseIntPipe) id: number): Promise<INews> {
    return this.newsService.getById(id);
  }

  @Post()
  async createNews(@Body() news: CreateNewsDto): Promise<string> {
    return this.newsService.create(news);
  }

  @Patch(':id')
  async updateNews(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateNewsDto,
  ): Promise<INews> {
    return this.newsService.update(id, body);
  }

  @Delete(':id')
  async deleteNews(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.newsService.delete(id);
  }
}
