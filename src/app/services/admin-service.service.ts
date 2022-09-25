import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  url: string = "http://localhost:8080/api/admin/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  //inject the DI
  constructor(private http: HttpClient) { }



  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.url);
  }

  //delete user by id
  deleteAdmin(id: number) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(any => {
      return this.getAdmin();
    });
  }


  //post
  createAdmin(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError(this.handleAdminError)
    );
  }

  // Handle API errors
  handleAdminError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
