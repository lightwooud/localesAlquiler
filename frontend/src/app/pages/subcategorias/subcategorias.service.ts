import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// errores
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Subcategorias } from './subcategorias';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {
  private apiURL = "http://localhost:8000/api/subcategorias/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Subcategorias[]> {
    return this.httpClient.get<Subcategorias[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  store(subcategorias:any): Observable<Subcategorias> {
    return this.httpClient.post<Subcategorias>(this.apiURL, JSON.stringify(subcategorias), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  
  find(id:any): Observable<Subcategorias> {
    return this.httpClient.get<Subcategorias>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, subcategorias:any): Observable<Subcategorias> {
    return this.httpClient.put<Subcategorias>(this.apiURL + id, JSON.stringify(subcategorias), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<Subcategorias>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
