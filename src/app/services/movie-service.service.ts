import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Movies } from '../classes/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  url: string = "http://localhost:8080/api/movies/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  //inject the DI
  constructor(private http: HttpClient) { }

  //get all users
  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.url);
  }

  //delete user by id
  deleteMovie(id: number) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(any => {
      return this.getMovies();
    });
  }


  //post
  createMovie(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError(this.handleMovieError)
    );
  }

  updateMovie(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError(this.handleMovieError)
    );
  }

  // Handle API errors
  handleMovieError(error: HttpErrorResponse) {
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
