import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightModel } from 'src/commons/models/models';
import { PassengerModel } from 'src/commons/models/models';
import { FlightSchema } from './schema/flight.schema';
import { PassengerSchema } from './schema/passenger.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FlightModel.name,
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        useFactory: () => FlightSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: PassengerModel.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  providers: [FlightService],
  controllers: [FlightController],
})
export class FlightModule {}
