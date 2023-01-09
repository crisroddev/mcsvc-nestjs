import { Observable } from 'rxjs';
import { IPassenger } from 'src/commons/interfaces/passenger.interface';
import { ClientProxyFlights } from 'src/commons/proxy/client-proxy';
import { PassengerDTO } from './dto/passenger.dto';
export declare class PassengerController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxyFlights);
    private _clientProxyPassenger;
    create(passengerDTO: PassengerDTO): Observable<IPassenger>;
    findAll(): Observable<IPassenger[]>;
    findOne(id: string): Observable<IPassenger>;
    update(id: string, passengerDTO: PassengerDTO): Observable<IPassenger>;
    delete(id: string): Observable<any>;
}
