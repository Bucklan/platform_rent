import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpError } from 'http-errors';
import { Observable, catchError, throwError } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:4444/api/events';

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

  create(event: Event): Observable<any> {
    return this.httpClient.post(this.apiUrl, JSON.stringify(event),
      this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }


  view(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  update(id: number, event: Event): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, JSON.stringify(event), this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
  destroy(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
}
