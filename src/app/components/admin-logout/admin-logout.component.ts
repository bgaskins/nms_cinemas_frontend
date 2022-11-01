import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../../services/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {


  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
    this.router.navigate(['/home']);
  }

}
