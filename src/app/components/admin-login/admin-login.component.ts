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

  username = "movies";
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) {

  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //redirect to the welcome page
      this.router.navigate(['home']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
