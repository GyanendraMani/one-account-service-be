import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  constructor() { };

  async create() {

  }

  async findAll() {

  }

  async findOne(id: string) {

  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOneByEmail(email: string) {


  }
}
