import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminSecurityService {
  getRateLimits(): string {
    return 'Hello World!';
  }
  updateRateLimit(ip, updateLimitDto) {
    return 'Hello World!';
  }

  getLockedAccounts(){
    return 'Hello World!';
  }

  unlockAccount(userId) {
    return 'Hello World!';
  }

  getApiLogs() {
    return 'Hello World!';
  }

}
