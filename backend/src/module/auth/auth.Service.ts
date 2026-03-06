import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../generated/prisma/client';
import { AuthLoginDto } from './domain/dto/authLogin.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthServices {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  generateToken(user: User) {
    const payload = { sub: user.id, name: user.name };
    const options = {
      expiresIn: 3600,
      issuer: 'motorlink',
      audience: 'motorlink-users',
    };
    return { access_token: this.jwtService.sign(payload, options) };
  }
  async login({ email, password }: AuthLoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password as string, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.generateToken(user);
  }
}
