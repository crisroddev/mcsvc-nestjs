import * as mongoose from 'mongoose';
export declare const FlightSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    passengers: mongoose.Types.ObjectId[];
    pilot?: string;
    airplane?: string;
    destinationCity?: string;
    flightDate?: Date;
}>;
