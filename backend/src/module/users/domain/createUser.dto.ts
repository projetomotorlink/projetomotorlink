import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/generated/prisma/enums';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
  @IsString()
  @IsNotEmpty()
  email!: string;
  @IsString()
  @IsNotEmpty()
  password?: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role!: Role;
}
