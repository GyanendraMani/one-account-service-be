import { Controller, Post, Delete, Param, Body } from '@nestjs/common';
import { AdminRolesService } from './admin-roles.service';

@Controller('admin/roles')
export class AdminRolesController {
  constructor(private readonly adminRolesService: AdminRolesService) {}

  @Post()
  createRole(@Body() createRoleDto) {
    return this.adminRolesService.createRole(createRoleDto);
  }

  @Delete(':id')
  deleteRole(@Param('id') roleId: string) {
    return this.adminRolesService.deleteRole(roleId);
  }

  @Post(':id/permissions')
  assignPermission(@Param('id') roleId: string, @Body() permissionDto) {
    return this.adminRolesService.assignPermission(roleId, permissionDto);
  }

  @Delete(':id/permissions/:permissionId')
  removePermission(@Param('id') roleId: string, @Param('permissionId') permissionId: string) {
    return this.adminRolesService.removePermission(roleId, permissionId);
  }
}
