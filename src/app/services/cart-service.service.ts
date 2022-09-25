import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {


  url: string = "http://localhost:8080/api/cart/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  //inject the DI
  constructor(private http: HttpClient) { }


  //get all users
  getTickets(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url);
  }

  //delete user by id 
  deleteTicket(id: number) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(any => {
      return this.getTickets();
    });
  }

  //post
  createBooking(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError(this.handleCartError)
    );
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
    return throwError(
      'Something bad happened; please try again later.');
  };


  //load image
}
