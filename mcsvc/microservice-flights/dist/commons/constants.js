"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["FlightQueue"] = "flights";
})(RabbitMQ = exports.RabbitMQ || (exports.RabbitMQ = {}));
var FlightMSG;
(function (FlightMSG) {
    FlightMSG["CREATE"] = "CREATE_PASSENGER";
    FlightMSG["FIND_ALL"] = "FIND_PASSENGERS";
    FlightMSG["FIND_ONE"] = "FIND_PASSENGER";
    FlightMSG["UPDATE"] = "UPDATE_PASSENGER";
    FlightMSG["DELETE"] = "DELETE_PASSENGER";
    FlightMSG["ADD_PASSENGER"] = "ADD_PASSENGER";
})(FlightMSG = exports.FlightMSG || (exports.FlightMSG = {}));
//# sourceMappingURL=constants.js.map