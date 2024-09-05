import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      { firstName: 'John', email: 'john@doe.com' },
      { firstName: 'Alice', email: 'Alice@gmail.com' },
    ];
  }

  /**
   * Find a user by ID
   */
  public findOneById(id: string) {
    return { id: 1234, firstName: 'Alice', email: 'Alice@gmail.com' };
  }
}
