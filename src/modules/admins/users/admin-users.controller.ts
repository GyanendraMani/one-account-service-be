import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';

@Controller('admin/users')
export class AdminUsersController {
  constructor(private readonly adminUsersService: AdminUsersService) {}

  @Get()
  getAllUsers() {
    return this.adminUsersService.getAllUsers();
  }

  @Put(':id/ban')
  banUser(@Param('id') userId: string) {
    return this.adminUsersService.banUser(userId);
  }

  @Put(':id/unban')
  unbanUser(@Param('id') userId: string) {
    return this.adminUsersService.unbanUser(userId);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.adminUsersService.deleteUser(userId);
  }
}
