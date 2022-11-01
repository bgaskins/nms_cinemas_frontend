import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder, private cartService: CartServiceService) { }

  ngOnInit(): void {

    this.reviewCartDetails();

    this.checkoutFormGroup = this.formBuilder.group({
      user: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),

      mailingAddress: this.formBuilder.group({
        address: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: [''],
      }),

      billingAddress: this.formBuilder.group({
        address: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: [''],
      }),

      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expMonth: [''],
        expYear: [''],

      })
    });
  }

  reviewCartDetails() {
    this.cartService.totalQuantity.subscribe(
      totalQuantity => this.totalQuantity = totalQuantity
    );
    this.cartService.totalPrice.subscribe(
      totalPrice => this.totalPrice = totalPrice
    );
  }


  onSubmit() {

    // Process checkout data here
    console.log("Handling the submit button");

    console.log(this.checkoutFormGroup.get('user')?.value);


  }
}
