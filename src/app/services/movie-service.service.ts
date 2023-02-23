import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../classes/movies';

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

  constructor(private http: HttpClient) { }

  //Get all movies
  getAllMovies(): Observable<any> {
    return this.http.get(this.url + 'all')
  }
  //Create new movie
  createMovie(movies: Movies): Observable<any> {
    return this.http.post(this.url + 'create/', JSON.stringify(movies), this.httpOptions)
  }
  //Get a movie by ID
  getMoviesById(id: number): Observable<any> {
    return this.http.get(this.url + 'find/' + id, this.httpOptions)
  }
  //Update an existing movie
  updateMovie(id: number, movies: Movies): Observable<any> {
    return this.http.put(this.url + 'update/' + id, JSON.stringify(movies), this.httpOptions)
  }
  //Delete an existing movie by id
  deleteMovieById(id: number): Observable<any> {
    return this.http.delete(this.url + 'delete/' + id)
  }

}