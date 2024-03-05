import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from 'src/dto/create-station.dto';
import { UpdateStationDto } from 'src/dto/update-station.dto';

@Controller('station')
export class StationController {
  constructor(private stationService: StationService) {}

  @Get()
  getAll() {
    console.log('hola');
    return this.stationService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const station = await this.stationService.findOne(id);
    if (!station) throw new NotFoundException('Station not founded');
    return station;
  }

  @Post()
  createStation(@Body() body: CreateStationDto) {
    try {
      console.log('hola');
      return this.stationService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Station already exists');
      }
    }
  }
  
  @Post(':stationId/vehicles/:vehicleId')
  async addVehicle(
    @Param('stationId') stationId: string,
    @Param('vehicleId') vehicleId: string
  ) {
    return this.stationService.addVehicleToStation(stationId, vehicleId);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteStation(@Param('id') id: string) {
    const station = await this.stationService.delete(id);
    if (!station) throw new NotFoundException('Station not found');
    return station;
  }

  @Put(':id')
  async updateStation(@Param('id') id: string, @Body() body: UpdateStationDto) {
    const station = await this.stationService.update(id, body);

    if (!station) throw new NotFoundException('Station not founded');
    return station;
  }
}
