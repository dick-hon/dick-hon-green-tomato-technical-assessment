import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true, unique: true })
  phoneNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
