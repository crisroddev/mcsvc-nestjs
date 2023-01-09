import { Observable } from 'rxjs';
import { IFlight } from 'src/commons/interfaces/flight.interface';
import { ClientProxyFlights } from 'src/commons/proxy/client-proxy';
import { PassengerDTO } from 'src/passenger/dto/passenger.dto';
import { FlightDTO } from './dto/flight.dto';
export declare class FlightController {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxyFlights);
    private _clientProxyFlights;
    private _clientProxyPassenger;
    create(flightDTO: FlightDTO): Observable<IFlight>;
    findAll(): Observable<IFlight[]>;
    findOne(id: string): Observable<IFlight>;
    update(id: string, passengerDTO: PassengerDTO): Observable<IFlight>;
    delete(id: string): Observable<any>;
    addPassenger(flightId: string, passengerId: string): Promise<Observable<any>>;
}
