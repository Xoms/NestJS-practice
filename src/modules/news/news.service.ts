import { Injectable } from '@nestjs/common';
import INews from './news.interface';


const NEWS = [
    {
        "id": 1,
        "title": "News1",
        "description": "bla bla bla bla" 
    },
    {
        "id": 2,
        "title": "News2",
        "description": "bla bla bla bla" 
    }, 
]

@Injectable()
export default class News {

    getAll():Array<INews>{
        return NEWS
    }

    getById(_id):INews {
        return NEWS.find( ({id}) => id === _id)
    }
}
