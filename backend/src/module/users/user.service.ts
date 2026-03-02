import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './domain/updateUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    return await this.prisma.user.delete({ where: { id: Number(id) } });
  }
  async update(id: string, body: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id: Number(id) },
      data: body,
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async createUser(body: any) {
    const user = await this.prisma.user.create(body);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async show(id: string) {
    return await this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }
}
