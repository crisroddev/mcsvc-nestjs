import { Observable } from 'rxjs';
import { UserDTO } from './dto/user.dto';
import { ClientProxyFlights } from './../commons/proxy/client-proxy';
import { IUser } from 'src/commons/interfaces/user.interface';
export declare class UserController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxyFlights);
    private _clientProxyUser;
    create(userDTO: UserDTO): Observable<IUser>;
    findAll(): Observable<IUser[]>;
    findOne(id: string): Observable<IUser>;
    update(id: string, userDTO: UserDTO): Observable<IUser>;
    delete(id: string): Observable<any>;
}
