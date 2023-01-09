import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PassengerModel } from 'src/commons/models/models';
import { PassengerSchema } from './schema/passenger.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PassengerModel.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  providers: [PassengerService],
  controllers: [PassengerController],
  exports: [PassengerService],
})
export class PassengerModule {}
