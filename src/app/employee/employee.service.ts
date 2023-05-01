import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private apiURL = 'http://localhost:8090/employee';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + id)
      .pipe(catchError(this.errorHandler))
      ;
  }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL)
      .pipe(catchError(this.errorHandler))
      ;

  }

  create(employee: Employee): Observable<any> {

    return this.httpClient.post(this.apiURL, JSON.stringify(employee), this.httpOptions)
      .pipe(catchError(this.errorHandler))
      ;
  }

  update(employee: Employee, id: number): Observable<any> {
    return this.httpClient.put(this.apiURL + '/' + id + '/' + employee.name,
      JSON.stringify(employee),
      this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => error);
  }

}
