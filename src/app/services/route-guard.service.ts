import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate() {
    if (this.hardcodedAuthenticationService.IsUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }
}