import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public adminLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.adminLogin = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/admin-dashboard']);
  }
}
