/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PassengerService } from 'src/passenger/passenger.service';
import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';
export declare class FlightController {
    private readonly flightService;
    private readonly passengerService;
    constructor(flightService: FlightService, passengerService: PassengerService);
    create(flightDTO: FlightDTO): Promise<import("../commons/interfaces/flight.interface").IFlight>;
    getAll(): Promise<Omit<import("mongoose").Document<unknown, any, import("../commons/interfaces/flight.interface").IFlight> & import("../commons/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getOne(id: string): Promise<import("../commons/interfaces/flight.interface").IFlight>;
    update(id: string, flightDTO: FlightDTO): Promise<import("../commons/interfaces/flight.interface").IFlight>;
    delete(id: string): Promise<import("mongoose").Document<unknown, any, import("../commons/interfaces/flight.interface").IFlight> & import("../commons/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addPassenger(flightId: string, passengerId: string): Promise<import("../commons/interfaces/flight.interface").IFlight>;
}
