import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'src/generated/prisma/client';
import { CreateUserDto } from './domain/createUser.dto';
import { UpdateUserDto } from './domain/updateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateUserDto): Promise<User> {
    body.password = await this.hashPassword(body.password as string);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return await this.prisma.user.create({ data: body as any });
  }

  async list() {
    return await this.prisma.user.findMany();
  }

  async show(id: number) {
    const user = await this.isIdExists(id);
    return user;
  }

  async update(id: number, body: UpdateUserDto) {
    await this.isIdExists(id);
    if (body.password) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      body.password = await this.hashPassword(body.password);
    }
    return await this.prisma.user.update({ where: { id }, data: body });
  }

  async delete(id: number) {
    await this.isIdExists(id);
    return await this.prisma.user.delete({ where: { id } });
  }

  private async isIdExists(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
