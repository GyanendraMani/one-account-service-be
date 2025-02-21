import { Controller, Post, Delete, Param, Body } from '@nestjs/common';
import { AdminServicesService } from './admin-services.service';

@Controller('admin/services')
export class AdminServicesController {
  constructor(private readonly adminServicesService: AdminServicesService) {}

  @Post()
  createService(@Body() createServiceDto) {
    return this.adminServicesService.createService(createServiceDto);
  }

  @Delete(':id')
  deleteService(@Param('id') serviceId: string) {
    return this.adminServicesService.deleteService(serviceId);
  }

  @Post(':id/assign-user/:userId')
  assignUserToService(@Param('id') serviceId: string, @Param('userId') userId: string) {
    return this.adminServicesService.assignUserToService(serviceId, userId);
  }

  @Delete(':id/remove-user/:userId')
  removeUserFromService(@Param('id') serviceId: string, @Param('userId') userId: string) {
    return this.adminServicesService.removeUserFromService(serviceId, userId);
  }
}
