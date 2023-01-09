import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { ProxyModule } from 'src/commons/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [FlightController],
})
export class FlightModule {}
