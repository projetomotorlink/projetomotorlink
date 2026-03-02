import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './domain/createUser.dto';
import { User } from 'src/generated/prisma/client';
import { UpdateUserDto } from './domain/updateUser.dto';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.createUser({ data: body });
  }
  @Get(':id')
  show(@Param('id') id: string) {
    return this.userService.show(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto): Promise<User> {
    return this.userService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
