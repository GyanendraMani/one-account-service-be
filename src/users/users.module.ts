import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CriptoService } from '../common/utills/crypto.util';
import { JwtService } from '@nestjs/jwt';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    CommonModule
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    CriptoService,
    JwtService
  ],
})
export class UsersModule { }
