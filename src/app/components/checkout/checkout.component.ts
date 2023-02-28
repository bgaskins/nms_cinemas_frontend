import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { Cart } from '../../classes/cart';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  totalPrice: number = 0;
  totalQuantity: number = 0;
  cartItems: Cart[] = [];

  // Credit card icons //
  faCcVisa = faCcVisa;
  faCcMastercard = faCcMastercard;
  faCcAmex = faCcAmex;
  faCcDiscover = faCcDiscover;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {

    this.reviewCartDetails();

  }

  reviewCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalQuantity.subscribe(
      totalQuantity => this.totalQuantity = totalQuantity
    );
    this.cartService.totalPrice.subscribe(
      totalPrice => this.totalPrice = totalPrice
    );
  }

}
