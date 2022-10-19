import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { User } from '../classes/user';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url: string = "http://localhost:8080/api/user/";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  movies: [];

  //inject the DI
  constructor(private http: HttpClient) { }

  //get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url +'all')
  }
  //post
  createUser(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    console.log(body)
    return this.http.post(this.url + 'newUser', body, { 'headers': headers })
  }
  //update user
  updateUser(id: number): Observable<any> {
    return this.http.put(this.url,id).pipe(
    );
  }
  //delete user by id
  deleteUser(id: number) {
    this.http.delete(this.url + 'delete' + id).subscribe(any => {
      return this.getAllUsers();
    });
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
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


  //load image

}