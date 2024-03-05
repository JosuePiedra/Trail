import { IsDateString, IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsString()
  dni?: string;

  @IsString()
  img?: string;

  @IsString()
  address?: string;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  @IsString()
  phone?: string;

  rentalHistory?: string;

  @IsNumber()
  age?: number;

  @IsDateString()
  birthday?: Date;
}
