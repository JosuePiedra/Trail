import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { CreateRenStatslDto } from 'src/dto/create-rent-stats.dto';
import { UpdateRentStatsDto } from 'src/dto/update-rent-stats.dto';
import { RentStats } from 'src/schemas/rent-stats.schema';

@Injectable()
export class RentStatsService {
  constructor(
    @InjectModel(RentStats.name) private vehicleModel: Model<RentStats>,
  ) {}

  findAll() {
    return this.vehicleModel.find();
  }

  async create(createStation: CreateRenStatslDto) {
    const newVehicle = new this.vehicleModel(createStation);
    return await newVehicle.save();
  }

  async findOne(id: string) {
    return await this.vehicleModel.findById(id);
  }

  async delete(id: string) {
    return await this.vehicleModel.findByIdAndDelete(id);
  }

  async update(id: string, station: UpdateRentStatsDto) {
    return await this.vehicleModel.findByIdAndUpdate(id, station);
  }
}
