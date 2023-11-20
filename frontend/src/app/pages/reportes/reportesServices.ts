import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private apiUrl = 'http://localhost:8000/api/reportes/'; // Reemplaza con la URL de tu API

  constructor(private httpClient: HttpClient) {}

  generarPdf(): Observable<Blob> {
    const url = this.apiUrl;
    return this.httpClient.get(url, { responseType: 'blob' });
  }
}