import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpError } from 'http-errors';
import { Observable, catchError, throwError } from 'rxjs';
import { Wash } from './wash';
@Injectable({
  providedIn: 'root'
})
export class WashService {
  private apiUrl = 'http://localhost:4444/api/washes';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private httpClient : HttpClient) {}
  index():Observable<any>
  {
    return this.httpClient.get(this.apiUrl).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  create(wash: Wash): Observable<any> {
    return this.httpClient.post(this.apiUrl, JSON.stringify(wash),
      this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }


  view(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  update(id: number, wash: Wash): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, JSON.stringify(wash), this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
  destroy(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
}
