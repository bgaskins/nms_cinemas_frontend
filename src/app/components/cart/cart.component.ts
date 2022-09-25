import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public movieTickets: any;

  constructor(private cartService: CartServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.cartService.getTickets().subscribe(any => {
      this.movieTickets = any;
    });
  }

  deleteTicket() {
    this.router.navigate(['/cart']);
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }
}
