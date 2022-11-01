import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  cartItems: Cart[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(theCartItem: Cart) {

    let alreadyInCart: boolean = false;
    let existingCartItem: Cart = undefined!;

    //Find ticket
    if (this.cartItems.length > 0) {

      for (let tempCartItem of this.cartItems) {
        if (tempCartItem.id === theCartItem.id) {
          existingCartItem = tempCartItem;
          break;
        }
      }

      //Check if tickets already exists
      alreadyInCart = (existingCartItem != undefined);
    }
    if (alreadyInCart) {
      // Increase tickets
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }
    // Calculate total price and ticket quantity
    this.computeCartTotals();
  }

  decrementQuantity(theCartItem: Cart) {
    theCartItem.quantity--;
    if (theCartItem.quantity === 0) {
      this.deleteFromCart(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
  }

  deleteFromCart(theCartItem: Cart) {
    // Find ticket index
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);
    // If ticket is found, erase from index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }

  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.ticket_price;
      totalQuantityValue += currentCartItem.quantity;
    }

    // New values
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.ticket_price;
      console.log(`name: ${tempCartItem.title}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.ticket_price}, subTotalPrice=${subTotalPrice}`);
    }
    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }
}





