import { Controller, Body, Get, Post, Patch, Delete,  Param } from '@nestjs/common';
import News from './news.service';
import INews from './news.interface';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: News) {}

    @Get()
    getAllNews(){
      return this.newsService.getAll();
    }

    @Get(':id')    
    getNewsById(@Param('id') id: string) {
        return this.newsService.getById(Number(id))
    }

    @Post()
    async createPost(@Body() post: INews) {
        return this.newsService.create(post);
    }

    @Patch(':id')
    async updateNews(@Param('id') id: string, @Body() body: any) {
        return this.newsService.update(Number(id), body);
    }

    @Delete(':id')
    async deleteNews(@Param('id') id: string) {
        return this.newsService.delete(Number(id));
    }
}
