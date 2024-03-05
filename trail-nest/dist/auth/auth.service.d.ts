import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        id: any;
        name: any;
        rol: any;
    }>;
    register(userDto: CreateUserDto): Promise<User>;
}
