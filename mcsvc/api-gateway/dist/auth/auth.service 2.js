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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../commons/constants");
const client_proxy_1 = require("../commons/proxy/client-proxy");
let AuthService = class AuthService {
    constructor(clientProxy, jwtService) {
        this.clientProxy = clientProxy;
        this.jwtService = jwtService;
        this._clientProxyUser = this.clientProxy.clientProxyUsers();
    }
    async validateUser(username, password) {
        const user = await this._clientProxyUser
            .send(constants_1.UserMSG.VALID_USER, { username, password })
            .toPromise();
        if (user)
            return user;
        return null;
    }
    async signIn(user) {
        const payload = {
            username: user.username,
            sub: user._id,
        };
        return { access_token: this.jwtService.sign(payload) };
    }
    async signUp(userDTO) {
        return await this._clientProxyUser
            .send(constants_1.UserMSG.CREATE, userDTO)
            .toPromise();
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_proxy_1.ClientProxyFlights,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map