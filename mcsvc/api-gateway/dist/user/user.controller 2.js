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
exports.UserController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const constants_1 = require("./../commons/constants");
const rxjs_1 = require("rxjs");
const user_dto_1 = require("./dto/user.dto");
const client_proxy_1 = require("./../commons/proxy/client-proxy");
let UserController = class UserController {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
        this._clientProxyUser = this.clientProxy.clientProxyUsers();
    }
    create(userDTO) {
        return this._clientProxyUser.send(constants_1.UserMSG.CREATE, userDTO);
    }
    findAll() {
        return this._clientProxyUser.send(constants_1.UserMSG.FIND_ALL, '');
    }
    findOne(id) {
        return this._clientProxyUser.send(constants_1.UserMSG.FIND_ONE, id);
    }
    update(id, userDTO) {
        return this._clientProxyUser.send(constants_1.UserMSG.UPDATE, { id, userDTO });
    }
    delete(id) {
        return this._clientProxyUser.send(constants_1.UserMSG.DELETE, id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('api/v2/user'),
    __metadata("design:paramtypes", [client_proxy_1.ClientProxyFlights])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map