import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public sayHi() {
    console.log('I am user service');
  }
}
