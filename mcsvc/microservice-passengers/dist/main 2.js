"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const constants_1 = require("./passenger/commons/constants");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [process.env.AMQP_URL],
            queue: constants_1.RabbitMQ.PassengerQueue,
        },
    });
    await app.listen();
    console.log('Microservice Passengers is listening');
}
bootstrap();
//# sourceMappingURL=main.js.map