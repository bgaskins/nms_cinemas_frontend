import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})


export class UserRegistrationComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }


  user = new User();
  isUserAdded = false;

  ngOnInit() {
  }

  createUser() {
    this.dataService.createUser(this.user)
      .subscribe(data => {
        console.log(data)
        this.isUserAdded = true;

      })
  }
}



