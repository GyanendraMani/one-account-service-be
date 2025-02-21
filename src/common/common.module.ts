import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CriptoService } from './utills/crypto.util';
import { EncryptionService } from './utills/encryption.utils';
import { JwtHelper } from './helper/jwt.helper';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret: "jdfnsafdusijfnksjdnfklsjdn",
      signOptions: { expiresIn: '24h' },
    }),
  ] ,
  providers: [
    CriptoService,
    EncryptionService,
    JwtHelper,
  ],
  exports: [
    CriptoService,
    EncryptionService,
    JwtHelper,
  ]
})
export class CommonModule { }
