import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassengerModel } from 'src/commons/models/models';
import { IPassenger } from './commons/passenger.interface';
import { PassengerDTO } from './dto/passenger.dto';
import { Model } from 'mongoose';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PassengerModel.name) private readonly model: Model<IPassenger>,
  ) {}
  async create(passengerDTO: PassengerDTO): Promise<IPassenger> {
    const newPassenger = new this.model(passengerDTO);
    return await newPassenger.save();
  }

  async getAll() {
    return await this.model.find();
  }

  async get(id: string): Promise<IPassenger> {
    return await this.model.findById(id);
  }

  async update(id: string, passengerDTO: PassengerDTO): Promise<IPassenger> {
    return await this.model.findByIdAndUpdate(id, passengerDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: `Passenger with ${id} deleted`,
    };
  }
}
