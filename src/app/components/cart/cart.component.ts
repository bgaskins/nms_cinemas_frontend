import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/classes/movies';
import { User } from 'src/app/classes/user';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //inject the service
  constructor(private router: Router, private cartService: CartServiceService) { }

  ngOnInit(): void {
  }
  user: User[];
  movies: Movies[];

  movie = new Movies();
  isTicketAdded = false;

  // Add New
  createBooking(): void {

    const data = {
      title: this.movie.title,
      ticket_price: this.movie.ticket_price,
      show_time: this.movie.showtime,
      auditorium: this.movie.auditorium,
    };
    if (!data.title) {
      alert('Add movie title');
      return;
    }

    this.cartService.createBooking(this.movie)
      .subscribe(data => {
        console.log(data)
        this.isTicketAdded = true;

      })
  }

  deleteTicket(id: number) {
    this.cartService.deleteTicket();
    console.log("Ticket deleted");
    this.onReload();
  }

  onReload() {
    this.router.navigate(['/users']);
    this.ngOnInit();
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }
}


