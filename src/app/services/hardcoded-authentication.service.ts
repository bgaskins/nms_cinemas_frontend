import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: any, password: any) {
    console.log('before' + this.IsUserLoggedIn())
    if (username === 'movies' && password === 'movie123') {
      sessionStorage.setItem('authenticateUser', username);
      console.log('after', this.IsUserLoggedIn());
      return true;
    }
    return false;
  }
  IsUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}