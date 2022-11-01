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


  constructor(private http: HttpClient) { }

  //Get all of NMS Cinemas users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'all')
  }
  //Create a new user
  createUser(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    console.log(body)
    return this.http.post(this.url + 'newUser', body, { 'headers': headers })
  }
  //Update an existing user
  updateUser(id: number): Observable<any> {
    return this.http.put(this.url, id).pipe(
    );
  }
  //Delete a user by ID
  deleteUser(id: number) {
    this.http.delete(this.url + 'delete' + id).subscribe(any => {
      return this.getAllUsers();
    });
  }


}