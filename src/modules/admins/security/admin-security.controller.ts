import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { AdminSecurityService } from './admin-security.service';

@Controller('admin/security')
export class AdminSecurityController {
  constructor(private readonly adminSecurityService: AdminSecurityService) {}

  @Get('rate-limits')
  getRateLimits() {
    return this.adminSecurityService.getRateLimits();
  }

  @Put('rate-limits/:ip')
  updateRateLimit(@Param('ip') ip: string, @Body() updateLimitDto) {
    return this.adminSecurityService.updateRateLimit(ip, updateLimitDto);
  }

  @Get('account-locks')
  getLockedAccounts() {
    return this.adminSecurityService.getLockedAccounts();
  }

  @Put('account-locks/:userId/unlock')
  unlockAccount(@Param('userId') userId: string) {
    return this.adminSecurityService.unlockAccount(userId);
  }

  @Get('api-logs')
  getApiLogs() {
    return this.adminSecurityService.getApiLogs();
  }
}
