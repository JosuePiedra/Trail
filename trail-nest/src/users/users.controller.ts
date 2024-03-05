import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  HttpCode,
  NotFoundException,
  Body,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) throw new NotFoundException('User not founded');
    return user;
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    try {
      return this.userService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: string) {
    const user = await this.userService.delete(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    const user = await this.userService.update(id, body);

    if (!user) throw new NotFoundException('User not founded');
    return user;
  }
}
