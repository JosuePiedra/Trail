import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Rental {
  @Prop({ required: true })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  vehicleId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  schedule: string;

  @Prop({ required: true })
  dateOfReservation: Date;

  @Prop({})
  pickupStation: mongoose.Schema.Types.ObjectId;

  @Prop({})
  pickupLocation: number[];

  @Prop({})
  dropoffLocation: number[];

  @Prop({})
  totalPrice: number;

  

}

export const RentalSchema = SchemaFactory.createForClass(Rental);
