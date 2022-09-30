import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  isAdminLoggedIn: boolean = false;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isAdminLoggedIn = this.hardcodedAuthenticationService.IsAdminLoggedIn();
  }

}
