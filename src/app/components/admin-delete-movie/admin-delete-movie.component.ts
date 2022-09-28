import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Movies } from 'src/app/classes/movies';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-admin-delete-movie',
  templateUrl: './admin-delete-movie.component.html',
  styleUrls: ['./admin-delete-movie.component.css']
})
export class AdminDeleteMovieComponent implements OnInit {

  public removeMovieTicket: FormGroup;
  public movieTicketId: any;
  movies: Movies[];

  constructor(private formBuilder: FormBuilder, private cartService: CartServiceService, private router: Router) {
    this.removeMovieTicket = this.formBuilder.group({
      movieTicketId: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(id: number) {
    this.cartService.deleteTicket();
    console.log("Movie deleted");
    this.onReload();
  };

  onReload() {
    this.router.navigate(['/admin-dashboard']);
    this.ngOnInit();
  }
}

