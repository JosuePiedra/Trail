import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVehicleDto } from 'src/dto/create-vehicle.dto';
import { UpdateVehicleDto } from 'src/dto/update-vehicle.dto';
import { Vehicle } from 'src/schemas/vehicle.schema';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}

  findAll() {
    return this.vehicleModel.find();
  }

  async create(createStation: CreateVehicleDto) {
    const newVehicle = new this.vehicleModel(createStation);
    return await newVehicle.save();
  }

  async findOne(id: string) {
    return await this.vehicleModel.findById(id);
  }

  async delete(id: string) {
    return await this.vehicleModel.findByIdAndDelete(id);
  }

  async update(id: string, station: UpdateVehicleDto) {
    return await this.vehicleModel.findByIdAndUpdate(id, station);
  }
}
