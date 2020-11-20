import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee } from '../common/Employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://dummy.restapiexample.com/api/v1";

  constructor(private httpClient: HttpClient,private route:Router) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
 

  create(Employee): Observable<Employee[]> {
    console.log(JSON.stringify(Employee));
    return this.httpClient.post<GetResponseEmployee>(this.apiServer + '/create', JSON.stringify(Employee))
    .pipe(
      map(response => response.data)
     
    )
  }  
  getById(id): Observable<Employee> {
    return this.httpClient.get<GetResponseOneEmployee>(this.apiServer + '/employee/' + id).pipe(
      map(res=>res.data )
    )
    
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<GetResponseEmployee>(this.apiServer + '/employees')
    .pipe(
      map(response => response.data)
      // catchError(this.errorHandler)
    )
  }

  update(id, Employee): Observable<Employee> {
    return this.httpClient.put<GetResponseOneEmployee>(this.apiServer + '/update/' + id, JSON.stringify(Employee))
    .pipe(
      map(response => response.data)
    )
  }

  delete(id){
    console.log(id);
    this.httpClient.delete(this.apiServer + '/delete/' + id);
     this.route.navigateByUrl("crud/home");
    
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}



export interface GetResponseEmployee {

  status:String;
  data:Employee[];
  
}

export interface GetResponseOneEmployee {

  status:String;
  data:Employee;
  
  
}