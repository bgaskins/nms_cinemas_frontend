import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.IsUserLoggedIn();
  }

}
