import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    // Users service
    // Find a user
    // Return posts

    return [
      {
        title: 'Test',
        content: 'test1',
      },
      {
        title: 'Test2',
        content: 'test2',
      },
    ];
  }
}
