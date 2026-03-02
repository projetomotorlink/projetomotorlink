import { Module } from '@nestjs/common';
import { PrismaModule } from './module/prisma/prisma.module';
import { UserModule } from './module/users/user.module';

@Module({
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
