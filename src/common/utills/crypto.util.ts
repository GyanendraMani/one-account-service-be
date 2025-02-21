import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CriptoService {

  async bicriptHash(password: string, salt?: number) {
    try {
      const saltOrRounds = salt || 10;
      return await bcrypt.hash(password, saltOrRounds);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to hashing");
    }
  }

  async bicriptHashMatch(password: string, hash: string) {
    try {
      return await bcrypt.compare(password, hash);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to hashing");
    }
  }
}
