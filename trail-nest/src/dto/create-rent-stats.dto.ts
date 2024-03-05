import {
    IsNotEmpty,
    IsMongoId,
    IsString,
    IsNumber,
    IsDateString,
    IsBoolean,
  } from 'class-validator';
import mongoose from 'mongoose';
  
  export class CreateRenStatslDto {

    @IsNotEmpty()
    @IsMongoId()
    userId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty()
    @IsMongoId()
    rentalId: mongoose.Schema.Types.ObjectId;
  
    @IsNotEmpty()
    @IsNumber()
    distance: number;
  
    @IsNotEmpty()
    @IsNumber()
    bateryStart: number;
  
    @IsNotEmpty()
    @IsNumber()
    bateryEnd: number;
  
    @IsNotEmpty()
    @IsNumber()
    velocity: number;
  
    @IsNotEmpty()
    @IsBoolean()
    needsMaintance: boolean;
  }
