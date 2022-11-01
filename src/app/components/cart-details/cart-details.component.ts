import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Cart } from '../../classes/cart';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: Cart[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  faPlus = faPlus;
  faMinus = faMinus;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  //Increase ticket count
  incrementQuantity(theCartItem: Cart) {
    this.cartService.addToCart(theCartItem);
  }
  //Decrease ticket count
  decrementQuantity(theCartItem: Cart) {
    this.cartService.decrementQuantity(theCartItem);
  }
  //Delete
  deleteFromCart(theCartItem: Cart) {
    this.cartService.deleteFromCart(theCartItem);
  }

  listCartDetails() {


    this.cartItems = this.cartService.cartItems;

    //Subscribe to the cart's total price
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data)

    //Subscribe to the carts total quantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data);

    //Get the cart totals
    this.cartService.computeCartTotals();
  }

}