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
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateNewsDto, UpdateNewsDto } from './dto';
import { INews } from './news.interface';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiOkResponse({
    description: 'List all News',
  })
  async getAllNews(): Promise<Array<INews>> {
    return this.newsService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: `Get News by id
    { 
      id: number,
      title: string,
      text: string,
      author: string
    }`,
  })
  @ApiNotFoundResponse({
    description: 'Not found',
  })
  async getNewsById(@Param('id', ParseIntPipe) id: number): Promise<INews> {
    return this.newsService.getById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Create new News entity',
  })
  @ApiConflictResponse({
    description: 'Document with id is exist',
  })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  @ApiBody({ type: CreateNewsDto })
  async createNews(@Body() news: CreateNewsDto): Promise<string> {
    return this.newsService.create(news);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'Update News entity by id',
  })
  @ApiNotFoundResponse({
    description: 'Not found',
  })
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  @ApiBody({ type: UpdateNewsDto })
  async updateNews(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateNewsDto,
  ): Promise<INews> {
    return this.newsService.update(id, body);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete single News by id',
  })
  @ApiNotFoundResponse({
    description: 'Not found',
  })
  async deleteNews(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.newsService.delete(id);
  }
}
