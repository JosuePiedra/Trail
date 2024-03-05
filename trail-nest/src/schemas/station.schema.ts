import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema({
  timestamps: true,
})
export class Station {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  totalCapacity: number;

  @Prop({
    required: true,
  })
  location: number[];

  @Prop([{ type: Types.ObjectId, ref: 'Vehicle' }])
  vehicles: Types.ObjectId[];

  @Prop({})
  currentVehicles: number;

  @Prop({})
  address: string;

  @Prop({})
  img: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
