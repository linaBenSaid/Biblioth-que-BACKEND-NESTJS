import { Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {

    //dependency injection
    constructor (private userservice: UserService){}

@Get('/all') //path-route  if there is no path then it's user
    async getUsers(){
        return this.userservice.getUsers();
    }

    @Get('/:id')
    async getUser(@Param('id')userId:string){
        return {userId};  //objet vide
    }

    @Post()
    async addUser(){
        return 'user created'; 
    }

}
