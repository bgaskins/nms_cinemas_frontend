import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/classes/cart';
import { User } from 'src/app/classes/user';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {


  allBookings: Observable<User[]>;

  //inject the service
  constructor(private router: Router, private dataService: DataServiceService,
    private cartService: CartServiceService) { }

  users: User[];
  cart: Cart[];

  ngOnInit(): void {
    this.getTickets();

  }
  getTickets() {
    this.dataService.getAllUser().subscribe(any => this.users = any);
  }

  deleteTicket(id: number) {
    this.cartService.deleteTicket(id);
    console.log("Booking deleted");
    this.onReload();
  }

  onReload() {
    this.router.navigate(['/user-dashboard']);
    this.ngOnInit();
  }
}
