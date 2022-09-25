import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-remove-from-cart',
  templateUrl: './remove-from-cart.component.html',
  styleUrls: ['./remove-from-cart.component.css']
})
export class RemoveFromCartComponent implements OnInit {

  public removeFromCart: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private cartService: CartServiceService,
    private router: Router) {
    this.removeFromCart = this.formBuilder.group({
      movieTicketId: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(removeFromCartId: FormGroup) {
    console.log(this.removeFromCart.value.movieTicketId);
    this.cartService.createBooking(this.removeFromCart.value.movieTicketId).subscribe(any => {
      console.log(any);
    });

    this.router.navigate(['/user-cart']);
  }

}
