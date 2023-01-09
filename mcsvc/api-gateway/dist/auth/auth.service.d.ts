import { JwtService } from '@nestjs/jwt';
import { ClientProxyFlights } from 'src/commons/proxy/client-proxy';
import { UserDTO } from '../user/dto/user.dto';
export declare class AuthService {
    private readonly clientProxy;
    private readonly jwtService;
    constructor(clientProxy: ClientProxyFlights, jwtService: JwtService);
    private _clientProxyUser;
    validateUser(username: string, password: string): Promise<any>;
    signIn(user: any): Promise<{
        access_token: string;
    }>;
    signUp(userDTO: UserDTO): Promise<any>;
}
