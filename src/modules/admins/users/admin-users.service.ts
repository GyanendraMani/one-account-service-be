import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminUsersService {
    getAllUsers() {
    return 'Hello World!';
  }

  banUser(userId){
    return 'Hello World!';
  }

  unbanUser(userId) {
    return 'Hello World!';
  }

  deleteUser(userId){
    return 'Hello World!';
  }

}
