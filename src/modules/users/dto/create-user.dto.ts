import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';

export type UserRoleType = "admin" | "user"

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(['user', 'admin'])
  role?: UserRoleType;
}



// export class UpdateUserDto {

//   @IsString()

//   fullName?: string;



//   @IsEnum(['USER', 'ADMIN'])

//   role?: string; // Optional

// }