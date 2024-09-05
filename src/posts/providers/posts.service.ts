import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Injecting Users service
     */
    private readonly userService: UsersService,
  ) {}

  public findAll(userId: string) {
    // Users service
    const user = this.userService.findOneById(userId);
    // Find a user
    // Return posts

    return [
      {
        user: user,
        title: 'Test',
        content: 'test1',
      },
      {
        user: user,
        title: 'Test2',
        content: 'test2',
      },
    ];
  }
}
