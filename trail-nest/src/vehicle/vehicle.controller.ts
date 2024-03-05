import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  NotFoundException,
  Body,
  ConflictException,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from 'src/dto/create-vehicle.dto';
import { UpdateVehicleDto } from 'src/dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get()
  getAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const station = await this.vehicleService.findOne(id);
    if (!station) throw new NotFoundException('Station not founded');
    return station;
  }

  @Post()
  createStation(@Body() body: CreateVehicleDto) {
    try {
      console.log('hola');
      return this.vehicleService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Station already exists');
      }
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteStation(@Param('id') id: string) {
    const station = await this.vehicleService.delete(id);
    if (!station) throw new NotFoundException('Station not found');
    return station;
  }

  @Put(':id')
  async updateStation(@Param('id') id: string, @Body() body: UpdateVehicleDto) {
    const station = await this.vehicleService.update(id, body);

    if (!station) throw new NotFoundException('Station not founded');
    return station;
  }
}
