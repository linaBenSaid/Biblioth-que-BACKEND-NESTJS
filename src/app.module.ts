import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule}from '@nestjs/typeorm'
import { User } from './user/entities/user.entity';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';

@Module({  // decorateur @
  imports: [
    
  TypeOrmModule.forRoot({ 
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: '',
  database: 'workshop',
  entities:[User,Book],
  synchronize:true, //creer et modifier la base
  logging:true  //affiche les logs
}), 
  UserModule, 
  BookModule],
  controllers: [AppController],
  providers: [AppService],
})
// controleur service repository 
// repository service controleur 
export class AppModule {}
