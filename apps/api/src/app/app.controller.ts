import { Controller, Get,Post,Req} from '@nestjs/common';

import { AppService } from './app.service';
import {Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('trellos')
  getData() {
    return this.appService.getData();
  }

  @Post('addBoard')
  addBoard(@Req() request:Request) {
    return this.appService.addBoard(request.body);
  }
  @Post('addList')
  addList(@Req() request: Request) {
    return this.appService.addList(request.body);
  }
}
