import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecibosService } from './recibos.service';
import { RecibosController } from './recibos.controller';
import { Recibo, ReciboSchema } from './schemas/recibo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Recibo.name, schema: ReciboSchema }])],
  controllers: [RecibosController],
  providers: [RecibosService],
})
export class RecibosModule {}
