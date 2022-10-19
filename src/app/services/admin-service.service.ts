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

  getAdmin(id: number): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.url + `/find/${id}`);
  }
  //delete admin by id
  deleteAdmin(id: number) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(any => {
      return this.getAdmin(id);
    });
  }
  //post
  createAdmin(admin: Admin): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(admin);
    console.log(body)
    return this.http.post(this.url + 'create', body, { 'headers': headers })
  }

}
