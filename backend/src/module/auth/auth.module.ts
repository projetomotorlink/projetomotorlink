import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthServices } from './auth.Service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      // ensure the secret is at least 256 bits (32 characters) long
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthServices],
  exports: [AuthServices],
})
export class AuthModule {}
