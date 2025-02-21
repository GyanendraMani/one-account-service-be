import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    ConfigModule,
    // PassportModule,
    // JwtModule.register({
    //   secret: "jdfnsafdusijfnksjdnfklsjdn",
    //   signOptions: { expiresIn: '600s' },
    // }),
    CommonModule
  ],
  controllers: [AuthController],
  providers: [
    ConfigService,
    AuthService,
    UsersService,
  ]
})
export class AuthModule { }
