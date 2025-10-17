import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReciboDocument = Recibo & Document;

@Schema({ timestamps: true })
export class Recibo {
  @Prop({ required: true })
  cliente: string;

  @Prop({ required: true })
  monto: number;

  @Prop({ default: 'pendiente', enum: ['pendiente', 'cobrado', 'rechazado'] })
  estado: string;

  @Prop()
  fechaVencimiento: Date;
}

export const ReciboSchema = SchemaFactory.createForClass(Recibo);
