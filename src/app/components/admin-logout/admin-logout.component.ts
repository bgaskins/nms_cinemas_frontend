import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
    this.router.navigate(['/home']);

  }


}
