import { UserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDTO: UserDTO): Promise<import("../commons/interfaces/user.interface").IUser>;
    allUsers(): Promise<import("../commons/interfaces/user.interface").IUser[]>;
    getUser(id: string): Promise<import("../commons/interfaces/user.interface").IUser>;
    update(id: string, userDTO: UserDTO): Promise<import("../commons/interfaces/user.interface").IUser>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
