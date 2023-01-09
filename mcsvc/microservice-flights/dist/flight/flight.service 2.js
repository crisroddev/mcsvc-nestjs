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
const models_1 = require("../commons/models/models");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const axios_1 = require("axios");
const moment = require("moment");
let FlightService = class FlightService {
    constructor(model) {
        this.model = model;
    }
    async getLocation(destinationCity) {
        const { data } = await axios_1.default.get(`https://www.metaweather.com/api/location/search/?query=${destinationCity}`);
        return data[0];
    }
    async getWeather(woeid, flightDate) {
        const dateFormat = moment.utc(flightDate).format();
        const year = dateFormat.substring(0, 4);
        const month = dateFormat.substring(5, 7);
        const day = dateFormat.substring(8, 10);
        const { data } = await axios_1.default.get(`https://www.metaweather.com/api/location/${woeid}/${year}/${month}/${day}`);
        return data;
    }
    assign({ _id, pilot, airplane, destinationCity, flightDate, passengers }, weather) {
        return Object.assign({
            _id,
            pilot,
            airplane,
            destinationCity,
            flightDate,
            passengers,
            weather,
        });
    }
    async create(flightDTO) {
        const newFlight = new this.model(flightDTO);
        return await newFlight.save();
    }
    async findAll() {
        return await this.model.find().populate('passengers');
    }
    async findOne(id) {
        const flight = await this.model.findById(id).populate('passengers');
        const location = await this.getLocation(flight.destinationCity);
        const weather = await this.getWeather(location.woeid, flight.flightDate);
        return this.assign(flight, weather);
    }
    async update(id, flightDTO) {
        return await this.model.findByIdAndUpdate(id, flightDTO, { new: true });
    }
    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return {
            status: common_1.HttpStatus.OK,
            msg: 'Deleted',
        };
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