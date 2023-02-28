import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  //inputs
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) {

  }

  ngOnInit() {
  }
  //Handles admin login credentials. If valid, user will be taken to admin page.
  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticateAdmin(this.username, this.password)) {
      //redirect to the welcome page
      this.router.navigate(['admin-dashboard']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
