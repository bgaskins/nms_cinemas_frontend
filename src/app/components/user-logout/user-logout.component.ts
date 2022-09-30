import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
    this.router.navigate(['/home']);
  }

}
