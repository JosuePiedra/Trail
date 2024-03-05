import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateStationDto {
  @IsString()
  name: string;

  @IsNumber()
  totalCapacity: number;

  @IsArray()
  location: number[];

  @IsArray()
  @IsString({ each: true })
  vehicles: string[];

  @IsNumber()
  currentVehicles: number;

  @IsString()
  address: string;

  @IsString()
  img: string;
}
