import { IPassenger } from 'src/passenger/commons/passenger.interface';
export interface IFlight extends Document {
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
    passengers: IPassenger[];
}
