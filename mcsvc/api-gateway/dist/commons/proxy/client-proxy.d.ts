import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
export declare class ClientProxyFlights {
    private readonly config;
    constructor(config: ConfigService);
    clientProxyUsers(): ClientProxy;
    clientProxyPassengers(): ClientProxy;
    clientProxyFlights(): ClientProxy;
}
