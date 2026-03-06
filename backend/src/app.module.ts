import { Module } from '@nestjs/common';
import { PrismaModule } from './module/prisma/prisma.module';
import { UserModule } from './module/users/user.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
})
export class AppModule {}
