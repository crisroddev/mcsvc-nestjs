"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const constants_1 = require("./commons/constants");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [process.env.AMQP_URL],
            queue: constants_1.RabbitMQ.FlightQueue,
        },
    });
    await app.listen();
    console.log('Microservice Flights is Listening');
}
bootstrap();
//# sourceMappingURL=main.js.map