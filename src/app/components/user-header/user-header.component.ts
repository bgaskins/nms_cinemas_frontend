import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  faBars = faBars;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.IsUserLoggedIn();
  }

  toggleNavList(action: string) {// this function opening the side menu in the mobile screen

    action == 'open' ?
      document.querySelector('.nav-list')?.classList.add('active')
      : document.querySelector('.nav-list')?.classList.remove('active');

  }
}
