import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// errores
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categorias } from './categorias';

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {
  private apiURL = "http://localhost:8000/api/categorias/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Categorias[]> {
    return this.httpClient.get<Categorias[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  store(categorias:any): Observable<Categorias> {
    return this.httpClient.post<Categorias>(this.apiURL, JSON.stringify(categorias), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:any): Observable<Categorias> {
    return this.httpClient.get<Categorias>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, categorias:any): Observable<Categorias> {
    return this.httpClient.put<Categorias>(this.apiURL + id, JSON.stringify(categorias), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<Categorias>(this.apiURL + id, this.httpOptions)
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
