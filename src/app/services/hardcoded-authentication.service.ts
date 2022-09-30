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


  authenticateAdmin(adminUsername: any, adminPassword: any) {
    console.log('before' + this.IsAdminLoggedIn())
    if (adminUsername === 'admin' && adminPassword === 'admin123') {
      sessionStorage.setItem('authenticateAdmin', adminUsername);
      console.log('after', this.IsAdminLoggedIn());
      return true;
    }
    return false;
  }
  IsAdminLoggedIn() {
    let user = sessionStorage.getItem('authenticateAdmin');
    return !(user === null);
  }

  logoutAdmin() {
    sessionStorage.removeItem('authenticateAdmin');
  }
}