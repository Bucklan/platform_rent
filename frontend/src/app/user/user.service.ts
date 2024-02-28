import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUsers = 'http://localhost:4444/api/users';
  private apiLogin = 'http://localhost:4444/api/login';
  private apiRegister = 'http://localhost:4444/api/register';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private httpClient : HttpClient) {}
  index():Observable<any>
  {
    return this.httpClient.get(this.apiUsers).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  login(user: User): Observable<any> {
    return this.httpClient.post(this.apiLogin, JSON.stringify(user),
      this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
  register(user: User): Observable<any> {
    return this.httpClient.post(this.apiRegister, JSON.stringify(user),
      this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
}
