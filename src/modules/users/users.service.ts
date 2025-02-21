import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';
import { CriptoService } from '../../common/utills/crypto.util';

@Injectable()
export class UsersService {
  constructor(
    private dataSource: DataSource,
    private criptoService: CriptoService
  ) { };

  async create(createUserDto: CreateUserDto) {
    try {
      const pwdHash = await this.criptoService.bicriptHash(createUserDto.password);
      const user = this.dataSource.manager.create(User, {
        first_name: createUserDto.firstName,
        last_name: createUserDto.lastName,
        email_id: createUserDto.email,
        password_hash: pwdHash,
        role: createUserDto.role
      });
      await this.dataSource.manager.save(user);
      return "User created succesfully";
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.dataSource.manager.findAndCount(User);
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string) {
    try {
      return await this.dataSource.manager.findOne(User, {
        where: {
          id: id,
        }
      })
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOneByEmail(email: string) {
    try {
      return await this.dataSource.manager.findOne(User, {
        where: {
          email_id: email,
        }
      })
    } catch (error) {
      throw error;
    }

  }
}
