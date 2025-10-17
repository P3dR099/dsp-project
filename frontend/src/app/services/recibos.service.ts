import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments';

export interface Recibo {
  _id: string;
  cliente: string;
  monto: number;
  estado: 'pendiente' | 'cobrado' | 'rechazado';
  fechaVencimiento: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecibosService {

  private baseUrl = environment['baseURL'] || 'http://localhost:3000/api/recibos';

  constructor(private http: HttpClient) {}

  getRecibos(): Observable<Recibo[]> {
    return this.http.get<Recibo[]>(this.baseUrl);
  }

  cobrarRecibo(id: string): Observable<Recibo> {
    return this.http.patch<Recibo>(`${this.baseUrl}/${id}/cobrar`, {});
  }
}
