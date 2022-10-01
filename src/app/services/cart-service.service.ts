import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Movies } from '../classes/movies';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  url: string = "http://localhost:8080/api/cart/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  //inject the DI
  constructor(private http: HttpClient) { }

  //get all users
  getTicket(id: number): Observable<Movies[]> {
    console.log('getTicket' + this.url + 'movies')
    return this.http.get<Movies[]>(this.url + `movies/find/${id}`)
  }

  //delete ticket by id 
  deleteTicket() {
    let endPoints = "id"
    this.http.delete(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  //create
  createBooking(movie: Movies): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(movie);
    console.log(body)
    return this.http.post(this.url + 'create', body, { 'headers': headers })
  }

  // Handle API errors
  handleCartError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
  }
}
