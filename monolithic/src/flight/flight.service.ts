import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FlightModel } from 'src/commons/models/models';
import { Model } from 'mongoose';
import { IFlight } from 'src/commons/interfaces/flight.interface';
import { FlightDTO } from './dto/flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FlightModel.name)
    private readonly model: Model<IFlight>,
  ) {}

  async create(flightDTO: FlightDTO): Promise<IFlight> {
    const newFlight = new this.model(flightDTO);
    return await newFlight.save();
  }

  async getAll() {
    return await this.model.find().populate('passengers');
  }

  async getOne(id: string): Promise<IFlight> {
    return this.model.findById(id).populate('passengers');
  }

  async update(id: string, flightDTO: FlightDTO): Promise<IFlight> {
    const updatedFlight = { ...flightDTO };
    return await this.model.findByIdAndUpdate(id, updatedFlight, { new: true });
  }

  async delete(id: string) {
    return await this.model.findByIdAndDelete(id);
  }

  async addPassenger(flightId: string, passengerId: string): Promise<IFlight> {
    return await this.model
      .findByIdAndUpdate(
        flightId,
        {
          $addToSet: { passengers: passengerId },
        },
        { new: true },
      )
      .populate('passengers');
  }
}
