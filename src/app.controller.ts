import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //decorateur @
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //get http (metadonnées) ->declaration 
  getHello(): String {
    return this.appService.getHello();
  }
}
