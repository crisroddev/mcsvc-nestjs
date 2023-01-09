"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightModule = void 0;
const common_1 = require("@nestjs/common");
const flight_controller_1 = require("./flight.controller");
const flight_service_1 = require("./flight.service");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("../commons/models/models");
const models_2 = require("../commons/models/models");
const flight_schema_1 = require("./schema/flight.schema");
const passenger_schema_1 = require("./schema/passenger.schema");
let FlightModule = class FlightModule {
};
FlightModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: models_1.FlightModel.name,
                    useFactory: () => flight_schema_1.FlightSchema.plugin(require('mongoose-autopopulate')),
                },
                {
                    name: models_2.PassengerModel.name,
                    useFactory: () => passenger_schema_1.PassengerSchema,
                },
            ]),
        ],
        providers: [flight_service_1.FlightService],
        controllers: [flight_controller_1.FlightController],
    })
], FlightModule);
exports.FlightModule = FlightModule;
//# sourceMappingURL=flight.module.js.map