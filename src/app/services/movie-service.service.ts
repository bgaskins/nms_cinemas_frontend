import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Movies } from '../classes/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  url: string = "http://localhost:808/api/movies/";
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
    .pipe(
      catchError(this.errorHandler)
    )}
  //create movie
  createMovie(movies: Movies): Observable<any> {
  return this.http.post(this.url + 'create', JSON.stringify(movies), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )}
//get movie by ID
  getMoviesById(id: number): Observable<any> {
    return this.http.get(this.url + 'find' + id)
    .pipe(
      catchError(this.errorHandler)
    )}
  //update movie
  updateMovie(id: number, movies: Movies): Observable<any> {
    return this.http.put(this.url + 'update' + id, JSON.stringify(movies), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )}
  //delete movie by id
  deleteAMovie(id: number){
    return this.http.delete(this.url + 'delete' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);

}

}