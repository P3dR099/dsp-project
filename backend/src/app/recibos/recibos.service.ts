import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recibo, ReciboDocument } from './schemas/recibo.schema';
import { CrearReciboDto } from './dto/crear-recibo.dto';

@Injectable()
export class RecibosService {
  constructor(@InjectModel(Recibo.name) private reciboModel: Model<ReciboDocument>) {}

  async create(crearReciboDto: CrearReciboDto): Promise<Recibo> {
    const nuevoRecibo = new this.reciboModel(crearReciboDto);
    return nuevoRecibo.save();
  }

  async findAll(filtro?: { estado?: string; cliente?: string }): Promise<Recibo[]> {
    const query: any = {};
    if (filtro?.estado) query.estado = filtro.estado;
    if (filtro?.cliente) query.cliente = filtro.cliente;
    return this.reciboModel.find(query).exec();
  }

  async cobrar(id: string): Promise<Recibo> {
    const recibo = await this.reciboModel.findById(id);
    if (!recibo) throw new NotFoundException('Recibo no encontrado');
    recibo.estado = 'cobrado';
    await recibo.save();

    // emitir evento a RabbitMQ
    // this.client.emit('recibo.cobrado', { id: recibo._id, cliente: recibo.cliente, monto: recibo.monto });

    return recibo;
  }
}
