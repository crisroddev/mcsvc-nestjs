"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightMSG = exports.PassengerMSG = exports.UserMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["UserQueue"] = "users";
    RabbitMQ["PassengerQueue"] = "passengers";
    RabbitMQ["FlightQueue"] = "flights";
})(RabbitMQ = exports.RabbitMQ || (exports.RabbitMQ = {}));
var UserMSG;
(function (UserMSG) {
    UserMSG["CREATE"] = "CREATE_USER";
    UserMSG["FIND_ALL"] = "FIND_USERS";
    UserMSG["FIND_ONE"] = "FIND_USER";
    UserMSG["UPDATE"] = "UPDATE_USER";
    UserMSG["DELETE"] = "DELETE_USER";
    UserMSG["VALID_USER"] = "VALID_USER";
})(UserMSG = exports.UserMSG || (exports.UserMSG = {}));
var PassengerMSG;
(function (PassengerMSG) {
    PassengerMSG["CREATE"] = "CREATE_PASSENGER";
    PassengerMSG["FIND_ALL"] = "FIND_PASSENGERS";
    PassengerMSG["FIND_ONE"] = "FIND_PASSENGER";
    PassengerMSG["UPDATE"] = "UPDATE_PASSENGER";
    PassengerMSG["DELETE"] = "DELETE_PASSENGER";
})(PassengerMSG = exports.PassengerMSG || (exports.PassengerMSG = {}));
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