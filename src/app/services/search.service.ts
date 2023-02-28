import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Search } from '../classes/search';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url: string = "http://localhost:8080/api/search/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  findByTitle(title: string): Observable<Search[]> {
    return this.http.get<Search[]>(this.url + 'search/' + title, this.httpOptions);
  }

}
