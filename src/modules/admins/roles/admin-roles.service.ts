import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminRolesService {
    createRole(createRoleDto) {
    return 'Hello World!';
  }

  deleteRole(roleId) {
    return 'Hello World!';
  }

  assignPermission(roleId, permissionDto){
    return 'Hello World!';
  }

  removePermission(roleId, permissionId){
    return 'Hello World!';
  }
}
