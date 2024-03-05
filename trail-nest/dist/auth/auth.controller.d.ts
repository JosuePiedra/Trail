import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        id: any;
        name: any;
        rol: any;
    }>;
    register(createUserDto: CreateUserDto): Promise<import("../schemas/user.schema").User>;
}
