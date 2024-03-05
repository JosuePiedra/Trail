import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRentalDto } from 'src/dto/create-rental.dto';
import { UpdateRentalDto } from 'src/dto/update-rental.dto';
import { Rental } from 'src/schemas/rental.schema';

@Injectable()
export class RentalService {
  constructor(@InjectModel(Rental.name) private rentalModel: Model<Rental>) {}

  async create(createRentalDto: CreateRentalDto): Promise<Rental> {
    const newRental = new this.rentalModel(createRentalDto);
    return newRental.save();
  }

  findAll() {
    return this.rentalModel.find();
  }

  async findOne(id: string): Promise<Rental> {
    return this.rentalModel.findById(id).exec();
  }

  async update(id: string, updateRentalDto: UpdateRentalDto): Promise<Rental> {
    return this.rentalModel
      .findByIdAndUpdate(id, updateRentalDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Rental> {
    return this.rentalModel.findByIdAndDelete(id).exec();
  }

  async findAllById(id: string) {
    return this.rentalModel.find({ userId: id }); // Asumiendo que el ID es 'userId'
  }

  async findRentalWithDetails(id: string): Promise<Rental> {
  return this.rentalModel.findById(id)
    .populate('vehicleId')
    .populate('pickupStation')
    .exec();
}

}
