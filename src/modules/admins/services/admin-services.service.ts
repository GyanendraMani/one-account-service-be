import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminServicesService {
    createService(createServiceDto) {
    return 'Hello World!';
  }

  deleteService(serviceId) {
    return 'Hello World!';
  }

  assignUserToService(serviceId, userId){
    return 'Hello World!';
  }

  removeUserFromService(serviceId, userId) {
    return 'Hello World!';
  }

}
