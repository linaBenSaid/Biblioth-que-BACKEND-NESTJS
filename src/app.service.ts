import { Injectable } from '@nestjs/common';

@Injectable() //dependency injection //injectable pour qu'on peut l'instancier ds app.controller
export class AppService {

  getHello() {
   return "hello world";
  // find returns tableau de promise de User
  }

}
