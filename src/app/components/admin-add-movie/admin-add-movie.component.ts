import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {

  public addMovieTicket: FormGroup;

  constructor(private formBuilder: FormBuilder, private cartService: CartServiceService, private router: Router) {
    this.addMovieTicket = this.formBuilder.group({
      title: [''],
      ticket_price: [''],
      language: [''],
      description: [''],
      showtime: [''],
      auditorium: [''],
      image: [''],
    });
  }
  ngOnInit(): void {
  }

  onSubmit(addMovieTicket: FormGroup) {
    this.cartService.createBooking(this.addMovieTicket.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/now-playing']);
  }

}
