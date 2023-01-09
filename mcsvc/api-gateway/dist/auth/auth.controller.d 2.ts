import { UserDTO } from '../user/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(req: any): Promise<{
        access_token: string;
    }>;
    signUp(userDTO: UserDTO): Promise<any>;
}
