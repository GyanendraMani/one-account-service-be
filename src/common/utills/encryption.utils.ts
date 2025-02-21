import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { ConfigService } from '@nestjs/config';


export class EncryptionService {
  private iv = randomBytes(16);
  private CRYPTO_KEY = new ConfigService().get('CRYPTO_KEY');

  async encrypt(textToEncrypt: string): Promise<string> {
    const key = (await promisify(scrypt)(this.CRYPTO_KEY, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, this.iv);
    const encryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);

    // Return the IV and encrypted text as a hex string
    return `${this.iv.toString('hex')}:${encryptedText.toString('hex')}`;
  }

  async decrypt(encryptedText: string): Promise<string> {
    const key = (await promisify(scrypt)(this.CRYPTO_KEY, 'salt', 32)) as Buffer;
    const [ivHex, encryptedHex] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedBuffer = Buffer.from(encryptedHex, 'hex');

    const decipher = createDecipheriv('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
      decipher.update(encryptedBuffer),
      decipher.final(),
    ]);
    return decryptedText.toString();

  }
}