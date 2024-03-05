import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum VehicleType {
  bicycle = 'bicycle',
  scooter = 'scooter',
}

export enum StateType {
  available = 'available',
  inUse = 'inUse',
  maintenance = 'maintenance',
}
@Schema({
  timestamps: true,
})
export class Vehicle {
  @Prop({
    required: true,
    enum: VehicleType,
  })
  type: VehicleType;

  @Prop({
    required: true,
    enum: StateType,
  })
  state: StateType;

  @Prop({
    required: true,
  })
  model: string;

  @Prop({
    required: true,
  })
  manufacturer: string;

  @Prop({
    required: true,
  })
  manufacturingAge: string;

  @Prop({
    required: true,
  })
  maxVelocity: number;

  @Prop({ required: true })
  location: [number];

  @Prop({})
  battery: number;

  @Prop()
  lastMaintenance?: Date;

  @Prop({})
  img: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
