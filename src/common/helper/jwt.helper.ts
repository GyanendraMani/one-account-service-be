import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtHelper {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  generateAccessToken(payload: any) {
    try {
      return this.jwtService.sign(payload);
    } catch (error) {
      console.log(error);
      throw new Error("Error on jwt token genration");
    }
  }
  async verifyJwtToken(token: string) {
    return await this.jwtService.verifyAsync(
      token,
      {
        secret: this.configService.get('JWT_SECRET')
      }
    );
  }
}