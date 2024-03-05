import {
  IsNotEmpty,
  IsDateString,
  IsNumber,
  Min,
  Max,
  IsEnum,
  IsString,
  IsOptional,
} from 'class-validator';
import { VehicleType, StateType } from 'src/schemas/vehicle.schema';

export class CreateVehicleDto {
  @IsEnum(VehicleType)
  type: VehicleType;

  @IsEnum(StateType)
  state: StateType;

  @IsNotEmpty()
  location: [number];

  @IsNumber()
  @Min(0)
  @Max(101)
  battery: number;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  manufacturer: string;

  @IsNotEmpty()
  @IsNumber()
  maxVelocity: number;

  @IsDateString()
  @IsOptional()
  lastMaintenance?: string;

  @IsNotEmpty()
  @IsNumber()
  manufacturingAge: string;

  @IsString()
  img: string;
}
