import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Movies } from '../classes/movies';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  newMovie: Movies[] = [];

  url: string = "http://localhost:8080/api/movies/";
  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //inject the DI
  constructor(private http: HttpClient) { }
  //get all movies
  getAllMovies(): Observable<any> {
    return this.http.get(this.url + 'all')
}
  //create movie
  createMovie(movies: Movies): Observable<any> {
  return this.http.post(this.url + 'create/', JSON.stringify(movies), this.httpOptions)
 }
//get movie by ID
  getMoviesById(id: number): Observable<any> {
    return this.http.get(this.url + 'find/' + id, this.httpOptions)
    }
  //update movie
  updateMovie(id: number, movies: Movies): Observable<any> {
    return this.http.put(this.url + 'update/' + id, JSON.stringify(movies), this.httpOptions)
  }
  //delete movie by id
  deleteMovieById(id: number): Observable<any>{
    return this.http.delete(this.url + 'delete/' + id)
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

}