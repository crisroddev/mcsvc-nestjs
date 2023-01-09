"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasssengerMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["PassengerQueue"] = "passengers";
})(RabbitMQ = exports.RabbitMQ || (exports.RabbitMQ = {}));
var PasssengerMSG;
(function (PasssengerMSG) {
    PasssengerMSG["CREATE"] = "CREATE_PASSENGER";
    PasssengerMSG["FIND_ALL"] = "FIND_PASSENGERS";
    PasssengerMSG["FIND_ONE"] = "FIND_PASSENGER";
    PasssengerMSG["UPDATE"] = "UPDATE_PASSENGER";
    PasssengerMSG["DELETE"] = "DELETE_PASSENGER";
})(PasssengerMSG = exports.PasssengerMSG || (exports.PasssengerMSG = {}));
//# sourceMappingURL=constants.js.map