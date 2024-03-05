import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await user.comparePassword(pass))) {
      const { password, ...userWithoutPassword } = user.toObject();
      password;
      return userWithoutPassword;
    }
    return null;
  }

  async login(user: any) {
    console.log(user._id);
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      id: user._id,
      name: user.name,
      rol: user.rol,
    };
  }

  async register(userDto: CreateUserDto): Promise<User> {
    return this.usersService.create(userDto);
  }
}
