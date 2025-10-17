import { Component, OnInit } from '@angular/core';
import { RecibosService, Recibo } from '../services/recibos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recibos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css']
})
export class RecibosComponent implements OnInit {

  recibos: Recibo[] = [];
  filtroEstado: 'todos' | 'pendiente' | 'cobrado' | 'rechazado' = 'todos';
  cargando = false;

  constructor(private recibosService: RecibosService) {}

  ngOnInit(): void {
    this.cargarRecibos();
  }

  cargarRecibos() {
    this.cargando = true;
    this.recibosService.getRecibos().subscribe({
      next: data => {
        this.recibos = data;
        this.cargando = false;
      },
      error: err => {
        console.error('Error cargando recibos', err);
        this.cargando = false;
      }
    });
  }

  cobrar(recibo: Recibo) {
    this.recibosService.cobrarRecibo(recibo._id).subscribe({
      next: updated => {
        recibo.estado = updated.estado;
      },
      error: err => console.error('Error cobrando recibo', err)
    });
  }

  filtrarRecibos(): Recibo[] {
    if (this.filtroEstado === 'todos') return this.recibos;
    return this.recibos.filter(r => r.estado === this.filtroEstado);
  }
}
