import {
  Injectable,
  UnauthorizedException,
  ConflictException
} from '@nestjs/common';
import { SignInUserDto } from './dto/sign-in.dto';
import { SignUpUserDto } from './dto/sign-up.dto';
import { UsersService } from '../modules/users/users.service';
import { CriptoService } from 'src/common/utills/crypto.util';
import { JwtHelper } from 'src/common/helper/jwt.helper';
import { EncryptionService } from 'src/common/utills/encryption.utils';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private criptoService: CriptoService,
    private jwtHelper: JwtHelper,
    private encryptionService: EncryptionService
  ) { }
  async signIn(signInUserDto: SignInUserDto) {
    try {
      const user = await this.usersService.findOneByEmail(signInUserDto.email);
      if (!user) {
        throw new UnauthorizedException("User not found!");
      }
      const isMatch = await this.criptoService.bicriptHashMatch(signInUserDto.password, user.password_hash);
      if (!isMatch) {
        throw new UnauthorizedException("Password is not valid!");
      }
      const token = await this.encryptionService.encrypt(this.jwtHelper.generateAccessToken({ email: signInUserDto.email, user_name: "test_user" }))
      return {
        token,
        type: "Bearer"
      }
    } catch (error) {
      throw error;
    }

  }
  async signUp(signUpUserDto: SignUpUserDto) {
    try {
      const user = await this.usersService.findOneByEmail(signUpUserDto.email);
      if (user) {
        throw new ConflictException("User already exists!");
      }
      await this.usersService.create(signUpUserDto);
      return true;
    } catch (error) {
      throw error;
    }

  }
}
