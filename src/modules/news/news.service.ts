import { Injectable } from '@nestjs/common';
import INews from './news.interface';

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
  async getAll(): Promise<Array<INews>> {
    return mockNews;
  }

  async getById(_id: number): Promise<INews> {
    return mockNews.find(({ id }) => id === _id);
  }

  async create(body: INews): Promise<string> {
    mockNews.push(body);
    return 'Created';
  }

  async update(_id: number, body: any): Promise<INews> {
    mockNews = mockNews.map<any>((cur) => {
      if (cur.id === _id) {
        return (cur = { ...cur, ...body });
      }
      return cur;
    });
    return this.getById(_id);
  }

  delete(_id: number): string {
    mockNews = mockNews.filter(({ id }) => id !== _id);
    return 'deleted';
  }
}
