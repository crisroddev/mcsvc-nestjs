"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSchema = void 0;
const mongoose = require("mongoose");
exports.FlightSchema = new mongoose.Schema({
    pilot: { type: String, require: true },
    airplane: { type: String, require: true },
    destinationCity: { type: String, require: true },
    flightDate: { type: Date, require: true },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passengers' }],
}, { timestamps: true });
//# sourceMappingURL=flight.schema.js.map