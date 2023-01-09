import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    create(flightDTO: FlightDTO): Promise<import("../commons/interfaces/flight.interface").IFlight>;
    getAll(): Promise<import("../commons/interfaces/flight.interface").IFlight[]>;
    getOne(id: string): Promise<import("../commons/interfaces/flight.interface").IFlight>;
    update(payload: any): Promise<import("../commons/interfaces/flight.interface").IFlight>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
    addPassenger(payload: any): Promise<import("../commons/interfaces/flight.interface").IFlight>;
}
