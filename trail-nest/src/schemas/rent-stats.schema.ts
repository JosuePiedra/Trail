import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class RentStats {
  @Prop({ required: true })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  rentalId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  distance: number;

  @Prop({ required: true })
  bateryStart: number;

  @Prop({ required: true })
  bateryEnd: number;

  @Prop({ required: true })
  velocity: number;

  @Prop({ required: true })
  needsMaintance: boolean;



}

export const RentStatsSchema = SchemaFactory.createForClass(RentStats);
