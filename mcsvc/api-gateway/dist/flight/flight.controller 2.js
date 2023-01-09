"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
const constants_1 = require("../commons/constants");
const client_proxy_1 = require("../commons/proxy/client-proxy");
const passenger_dto_1 = require("../passenger/dto/passenger.dto");
const flight_dto_1 = require("./dto/flight.dto");
let FlightController = class FlightController {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
        this._clientProxyFlights = this.clientProxy.clientProxyFlights();
        this._clientProxyPassenger = this.clientProxy.clientProxyPassengers();
    }
    create(flightDTO) {
        return this._clientProxyFlights.send(constants_1.FlightMSG.CREATE, flightDTO);
    }
    findAll() {
        return this._clientProxyFlights.send(constants_1.FlightMSG.FIND_ALL, '');
    }
    findOne(id) {
        return this._clientProxyFlights.send(constants_1.FlightMSG.FIND_ONE, id);
    }
    update(id, passengerDTO) {
        return this._clientProxyFlights.send(constants_1.FlightMSG.UPDATE, {
            id,
            passengerDTO,
        });
    }
    delete(id) {
        return this._clientProxyFlights.send(constants_1.FlightMSG.DELETE, id);
    }
    async addPassenger(flightId, passengerId) {
        const passenger = await this._clientProxyPassenger
            .send(constants_1.PassengerMSG.FIND_ONE, passengerId)
            .toPromise();
        if (!passenger)
            throw new common_1.HttpException('Passenger Not FOund', common_1.HttpStatus.NOT_FOUND);
        return this._clientProxyFlights.send(constants_1.FlightMSG.ADD_PASSENGER, {
            flightId,
            passengerId,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [flight_dto_1.FlightDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], FlightController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], FlightController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], FlightController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, passenger_dto_1.PassengerDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], FlightController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], FlightController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':flightId/passenger/passengerId'),
    __param(0, (0, common_1.Param)('flightId')),
    __param(1, (0, common_1.Param)('passengerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "addPassenger", null);
FlightController = __decorate([
    (0, swagger_1.ApiTags)('flights'),
    (0, common_1.Controller)('api/v2/flight'),
    __metadata("design:paramtypes", [client_proxy_1.ClientProxyFlights])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map