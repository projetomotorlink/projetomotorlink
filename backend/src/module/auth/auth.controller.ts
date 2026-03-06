import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthLoginDto } from './domain/dto/authLogin.dto';
import { AuthServices } from './auth.Service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthServices) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() body: AuthLoginDto) {
    return this.authService.login(body);
  }
}
