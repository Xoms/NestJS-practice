import { Injectable } from '@nestjs/common';
import INews from './news.interface';

//let - simply because its not important right now
let mockNews = [
    {
        "id": 1,
        "title": "News1",
        "description": "bla bla bla bla" 
    },
    {
        "id": 2,
        "title": "News2",
        "description": "bla bla bla bla bla" 
    }, 
]

@Injectable()
export default class News {

    getAll():Array<INews>{
        return mockNews
    }

    getById(_id:number):INews {
        return mockNews.find( ({id}) => id === _id)
    }

    create(body:INews):string {
        mockNews.push(body);
        return 'Created'
    }

    update(_id:number, body:any):INews {
        //Влом придумывать интерфейс сейчас - хоццо суть постичь
        return mockNews.reduce<any>( (acc, cur) => {
            if (cur.id === _id) {
                acc = {...cur, ...body}
            }
            return acc
        }, {})
    }

    delete (_id: number):string{
        mockNews = mockNews.filter( ({id}) => id !==_id );
        return 'deleted'
    }
}
