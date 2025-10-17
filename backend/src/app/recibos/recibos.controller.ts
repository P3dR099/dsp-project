import { Controller, Post, Body, Get, Query, Param, Patch, UseGuards } from '@nestjs/common';
import { RecibosService } from './recibos.service';
import { CrearReciboDto } from './dto/crear-recibo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('recibos')
@Controller('recibos')
@UseGuards(JwtAuthGuard)
export class RecibosController {
  constructor(private readonly recibosService: RecibosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo recibo' })
  @ApiResponse({ status: 201, description: 'Recibo creado correctamente.' })
  create(@Body() crearReciboDto: CrearReciboDto) {
    return this.recibosService.create(crearReciboDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar recibos' })
  @ApiQuery({ name: 'estado', required: false, description: 'Filtrar por estado' })
  @ApiQuery({ name: 'cliente', required: false, description: 'Filtrar por cliente' })
  @ApiResponse({ status: 200, description: 'Lista de recibos' })
  findAll(@Query('estado') estado?: string, @Query('cliente') cliente?: string) {
    return this.recibosService.findAll({ estado, cliente });
  }

  @Patch(':id/cobrar')
  @ApiOperation({ summary: 'Marcar recibo como cobrado' })
  @ApiParam({ name: 'id', description: 'ID del recibo a cobrar' })
  @ApiResponse({ status: 200, description: 'Recibo cobrado correctamente' })
  cobrar(@Param('id') id: string) {
    return this.recibosService.cobrar(id);
  }
}
