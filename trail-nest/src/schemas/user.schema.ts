import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rol: string;

  @Prop()
  dni: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  rentalHistory: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  birthday: Date;

  @Prop({})
  img: string;

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt();
    this['password'] = await bcrypt.hash(this['password'], salt);
  }
  next();
});

UserSchema.methods.comparePassword = async function (
  password: string,
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};
