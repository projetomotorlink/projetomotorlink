import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './domain/createUser.dto';
import { User } from 'src/generated/prisma/client';
import { UpdateUserDto } from './domain/updateUser.dto';
import { ParamId } from '../shared/decorators/paramId.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.list();
  }

  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(body);
  }

  @Get(':id')
  show(@ParamId() id: number) {
    return this.userService.show(id);
  }

  @Patch(':id')
  update(@ParamId() id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  delete(@ParamId() id: number) {
    return this.userService.delete(id);
  }
}
