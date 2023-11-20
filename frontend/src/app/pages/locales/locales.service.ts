import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// errores
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Locales } from './locales';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {
  private apiURL = "http://localhost:8000/api/locales/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Locales[]> {
    return this.httpClient.get<Locales[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  store(locales:any): Observable<Locales> {
    return this.httpClient.post<Locales>(this.apiURL, JSON.stringify(locales), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:any): Observable<Locales> {
    return this.httpClient.get<Locales>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, locales:any): Observable<Locales> {
    return this.httpClient.put<Locales>(this.apiURL + id, JSON.stringify(locales), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<Locales>(this.apiURL + id, this.httpOptions)
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
