import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpUserDto } from './dto/sign-up.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: any) {
    return { result: await this.authService.signIn(signInDto), message: "Token genrated successfully" };
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async signUp(@Body() signUpDto: SignUpUserDto) {
    return { result: await this.authService.signUp(signUpDto), message: "User Created Successfully." };
  }
}