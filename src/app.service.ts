import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(3);
    return 'Hello to server-3';
  }
}
