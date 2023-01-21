import { Module } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookController } from './controllers/book.controller';
import { createBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { BookService } from './services/book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports:[TypeOrmModule.forFeature([Book])],
})
export class BookModule {
  
}
