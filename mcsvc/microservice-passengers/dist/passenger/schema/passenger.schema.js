"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerSchema = void 0;
const mongoose = require("mongoose");
exports.PassengerSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
});
exports.PassengerSchema.index({ email: 1 }, { unique: true });
//# sourceMappingURL=passenger.schema.js.map