import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recibo, ReciboSchema } from './recibos/schemas/recibo.schema';
import { RecibosModule } from './recibos/recibos.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/recibos',{
      family: 4,
    }),
    RecibosModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
