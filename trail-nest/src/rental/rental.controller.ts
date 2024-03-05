import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { RentalService } from './rental.service';
import { CreateRentalDto } from 'src/dto/create-rental.dto';
import { UpdateRentalDto } from 'src/dto/update-rental.dto';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  create(@Body() createRentalDto: CreateRentalDto) {
    return this.rentalService.create(createRentalDto);
  }

  @Get()
  getAll() {
    return this.rentalService.findAll();
  }

  @Get('/all/:id')
  getAllByUser(@Param('id') id: string) {
    return this.rentalService.findAllById(id);
  }


  @Get('/completeInfo/:id')
  async getRentalWithDetails(@Param('id') id: string) {
    return this.rentalService.findRentalWithDetails(id);
  }



  @Get('/last/:id')
  async getLast(@Param('id') id: string) {
    const rentals = await this.rentalService.findAllById(id);
    return rentals.length > 0 ? rentals[rentals.length - 1] : null;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalDto: UpdateRentalDto) {
    return this.rentalService.update(id, updateRentalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(id);
  }
  
}
