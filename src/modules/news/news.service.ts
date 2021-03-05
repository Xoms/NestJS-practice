import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { INews } from './news.interface';
import { CreateNewsDto, UpdateNewsDto } from './dto';

//let - for update
let mockNews = [
  {
    id: 1,
    title: 'News1',
    text: 'bla bla bla bla',
    author: 'author1',
  },
  {
    id: 2,
    title: 'News2',
    text: 'bla bla bla bla bla',
    author: 'author2',
  },
];

@Injectable()
export class NewsService {
  //helper
  async findById(_id: number): Promise<INews> {
    const news = mockNews.find(({ id }) => id === _id);
    if (!news) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return news;
  }

  //api
  async create(body: CreateNewsDto): Promise<string> {
    if (mockNews.find(({ id }) => id === body.id)) {
      throw new HttpException(
        `Document with provided id is exist`,
        HttpStatus.CONFLICT,
      );
    }
    mockNews.push(body);
    return 'Created';
  }

  async getAll(): Promise<Array<INews>> {
    return mockNews;
  }

  async getById(_id: number): Promise<INews> {
    return await this.findById(_id);
  }

  async update(_id: number, body: UpdateNewsDto): Promise<INews> {
    await this.findById(_id);

    mockNews = mockNews.map<any>((cur) => {
      if (cur.id === _id) {
        return (cur = { ...cur, ...body });
      }
      return cur;
    });
    return this.getById(_id);
  }

  async delete(_id: number): Promise<string> {
    await this.findById(_id);
    mockNews = mockNews.filter(({ id }) => id !== _id);
    return 'deleted';
  }
}
