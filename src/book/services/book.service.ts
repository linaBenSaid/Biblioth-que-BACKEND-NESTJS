import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { createBookDto } from '../dto/create-book.dto';
import { updateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BookService {

    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
      ) {}
    
      async createBook(createBookDto:createBookDto){
        return this.bookRepository.save(createBookDto);
      }
    
      async getById(bookId:number){
        return this.bookRepository.findOne({where: {id:bookId}})
      }

      async deleteBook(bookId:number){
        return this.bookRepository.delete(bookId)
      }

      async updateBook(bookId:number,updateBookDto:updateBookDto){
        return this.bookRepository.update(bookId,updateBookDto)
      }

      async getAllBooks(){
          return this.bookRepository.find({relations:['owner']})
      }
}
