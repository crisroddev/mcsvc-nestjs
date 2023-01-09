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
exports.PassengerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const constants_1 = require("./commons/constants");
const passenger_dto_1 = require("./dto/passenger.dto");
const passenger_service_1 = require("./passenger.service");
let PassengerController = class PassengerController {
    constructor(passengerService) {
        this.passengerService = passengerService;
    }
    create(passengerDTO) {
        return this.passengerService.create(passengerDTO);
    }
    getAll() {
        return this.passengerService.getAll();
    }
    get(id) {
        return this.passengerService.get(id);
    }
    update(id, payload) {
        return this.passengerService.update(payload.id, payload.passengerDTO);
    }
    delete(id) {
        return this.passengerService.delete(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.PasssengerMSG.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passenger_dto_1.PassengerDTO]),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.PasssengerMSG.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "getAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.PasssengerMSG.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "get", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.PasssengerMSG.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.PasssengerMSG.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PassengerController.prototype, "delete", null);
PassengerController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [passenger_service_1.PassengerService])
], PassengerController);
exports.PassengerController = PassengerController;
//# sourceMappingURL=passenger.controller.js.map