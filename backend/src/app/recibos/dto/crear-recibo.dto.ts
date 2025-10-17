import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CrearReciboDto {
  @ApiProperty({ description: 'Nombre del cliente', example: 'Juan Pérez' })
  @IsString()
  cliente: string;

  @ApiProperty({ description: 'Monto del recibo', example: 1500 })
  @IsNumber()
  monto: number;

  @ApiPropertyOptional({ description: 'Fecha de vencimiento del recibo', example: '2025-12-31' })
  @IsOptional()
  @IsDate()
  fechaVencimiento?: Date;
}
