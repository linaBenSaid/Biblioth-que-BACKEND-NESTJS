import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createBookDto } from '../dto/create-book.dto';
import { updateBookDto } from '../dto/update-book.dto';
import { BookService } from '../services/book.service';

@Controller('books')
export class BookController {

    constructor(private bookService:BookService){}

    @Get()
    async getAllBooks(){
        return this.bookService.getAllBooks()
    }

    @Post()
    async createBook(@Body() createBookDto:createBookDto){ //crée un book et le retourne  dto data transfer object
        return this.bookService.createBook(createBookDto);
    }

    @Get(':id')
    async getBookById(@Param('id') bookId:number){
        return this.bookService.getById(bookId)
    }


    @Patch(':id')
    async updateBook(
        @Param('id') bookId:number,
        @Body() updateBookDto:updateBookDto){ //crée un book et le retourne  dto data transfer object
        return this.bookService.updateBook(bookId,updateBookDto)
    }
    @Delete(':id') //path
    async deleteBook(@Param('id') bookId:number){
        return this.bookService.deleteBook(bookId)
    }
}
