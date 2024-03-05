import {
  IsNotEmpty,
  IsMongoId,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class UpdateRentalDto {
  @IsNotEmpty()
  @IsMongoId()
  userId?: string;

  @IsNotEmpty()
  @IsMongoId()
  vehicleId?: string;

  @IsNotEmpty()
  @IsDateString()
  startTime?: Date;

  @IsNotEmpty()
  @IsDateString()
  endTime?: Date;

  @IsNotEmpty()
  @IsString()
  pickupStation?: string;

  @IsNumber()
  dropoffLocation?: number;

  @IsNumber()
  totalPrice?: number;
}
