import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.IsUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }
}