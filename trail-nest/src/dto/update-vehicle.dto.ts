import {
  IsNotEmpty,
  IsDateString,
  IsEnum,
  IsNumber,
  Min,
  Max,
  IsString,
  IsOptional,
} from 'class-validator';
import { VehicleType, StateType } from 'src/schemas/vehicle.schema';
export class UpdateVehicleDto {
  @IsEnum(VehicleType)
  type?: VehicleType;

  @IsEnum(StateType)
  @IsOptional()
  state?: StateType;

  @IsString()
  img?: string;

  @IsNotEmpty()
  
  location: [number];

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  battery?: number;

  @IsString()
  
  model?: string;

  @IsString()
  @IsOptional()
  manufacturer?: string;

  @IsNumber()
  @IsOptional()
  manufacturingAge?: string;

  @IsNumber()
  
  maxVelocity?: number;

  
  @IsDateString()
  lastMaintenance?: string;
}
