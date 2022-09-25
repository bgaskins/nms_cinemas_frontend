import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private cartService: CartServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  user = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  //user:UserClass;

  isBookAdded = false;

  // Add New
  addBook(): void {

    const data = {
      fname: this.user.fname,
      lname: this.user.lname,
      email: this.user.email,
      password: this.user.password
    };
    if (!data.fname && !data.lname) {
      alert('Please add title!');
      return;
    }

    this.cartService.createBooking(data)
      .subscribe(
        any => {
          console.log(any);
          this.isBookAdded = true;

        },
        error => {
          console.log(error);
        });
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }
}