import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;


  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.IsUserLoggedIn();
  }
}
