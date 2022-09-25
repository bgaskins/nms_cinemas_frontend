import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  public userDetails: any;

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.dataService.getAllUser().subscribe(any => {
      this.userDetails = any;
    });
  }

  getTickets() {
    this.router.navigate(['/order-summary']);
  }

}
