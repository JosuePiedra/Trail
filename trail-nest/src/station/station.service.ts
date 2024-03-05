import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Station } from '../schemas/station.schema';
import { Model } from 'mongoose';
import { CreateStationDto } from '../dto/create-station.dto';
import { UpdateStationDto } from '../dto/update-station.dto';

@Injectable()
export class StationService {
  constructor(
    @InjectModel(Station.name) private stationModel: Model<Station>,
  ) {}

  findAll() {
    return this.stationModel.find();
  }

  async create(createStation: CreateStationDto) {
    const newStation = new this.stationModel(createStation);
    return await newStation.save();
  }

  async findOne(id: string) {
    return await this.stationModel.findById(id);
  }

  async delete(id: string) {
    return await this.stationModel.findByIdAndDelete(id);
  }

  async update(id: string, station: UpdateStationDto) {
    return await this.stationModel.findByIdAndUpdate(id, station);
  }


  async addVehicleToStation(stationId: string, vehicleId: string): Promise<Station> {
    return this.stationModel.findByIdAndUpdate(
      stationId,
      { $addToSet: { vehicles: vehicleId } }, 
      { new: true } 
    ).exec();
  }

}
