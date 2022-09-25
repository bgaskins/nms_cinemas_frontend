import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public userAccountRegistration: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dataService: DataServiceService,
    private router: Router) {
    this.userAccountRegistration = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userAccountRegistrationDetails: FormGroup) {
    this.dataService.createUser(this.userAccountRegistration.value).subscribe(any => {
      console.log(any);
    });
    this.router.navigate(['/user-login']);
  }
}
