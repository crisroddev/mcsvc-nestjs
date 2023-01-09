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
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("../commons/models/models");
const mongoose_2 = require("mongoose");
let FlightService = class FlightService {
    constructor(model) {
        this.model = model;
    }
    async create(flightDTO) {
        const newFlight = new this.model(flightDTO);
        return await newFlight.save();
    }
    async getAll() {
        return await this.model.find().populate('passengers');
    }
    async getOne(id) {
        return this.model.findById(id).populate('passengers');
    }
    async update(id, flightDTO) {
        const updatedFlight = Object.assign({}, flightDTO);
        return await this.model.findByIdAndUpdate(id, updatedFlight, { new: true });
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
    async addPassenger(flightId, passengerId) {
        return await this.model
            .findByIdAndUpdate(flightId, {
            $addToSet: { passengers: passengerId },
        }, { new: true })
            .populate('passengers');
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(models_1.FlightModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map