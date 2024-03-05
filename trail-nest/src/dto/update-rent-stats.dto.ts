import {
    IsNotEmpty,
    IsMongoId,
    IsString,
    IsNumber,
    IsDateString,
    IsBoolean,
  } from 'class-validator';
import mongoose from 'mongoose';
  
  export class UpdateRentStatsDto {

    @IsMongoId()
    userId: mongoose.Schema.Types.ObjectId;

    @IsMongoId()
    rentalId: mongoose.Schema.Types.ObjectId;
  
    @IsNumber()
    distance: number;
  
    @IsNumber()
    bateryStart: number;
  
    @IsNumber()
    bateryEnd: number;
  
    @IsNumber()
    velocity: number;
  
    @IsBoolean()
    needsMaintance: boolean;
  }
