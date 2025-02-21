import { Module } from '@nestjs/common';
import { AdminUsersController } from './users/admin-users.controller';
import { AdminUsersService } from './users/admin-users.service';
import { AdminRolesController } from './roles/admin-roles.controller';
import { AdminRolesService } from './roles/admin-roles.service';
import { AdminServicesController } from './services/admin-services.controller';
import { AdminServicesService } from './services/admin-services.service';
import { AdminSecurityController } from './security/admin-security.controller';
import { AdminSecurityService } from './security/admin-security.service';

@Module({
  controllers: [
    AdminUsersController,
    AdminRolesController,
    AdminServicesController,
    AdminSecurityController
  ],
  providers: [
    AdminUsersService,
    AdminRolesService,
    AdminServicesService,
    AdminSecurityService
  ],
})
export class AdminModule {}
