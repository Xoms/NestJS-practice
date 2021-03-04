import { Controller, Get, Param } from '@nestjs/common';
import News from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: News) {}

    @Get()
    getHello(): string {
      return this.newsService.getAll();
    }

    @Get(':id'){

    }
    }
}
