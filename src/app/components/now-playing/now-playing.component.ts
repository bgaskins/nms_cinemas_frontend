import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Movies } from '../../classes/movies';
import { Router } from '@angular/router';
import { CartServiceService } from '../../services/cart-service.service';
import { Cart } from '../../classes/cart';



@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {


  movies: Movies[] = [];

  constructor(private movieService: MovieServiceService,
    private cartService: CartServiceService,
    private router: Router) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data: Movies[]) => {
      console.log(this.movies);
      this.movies = data;
    });
  }



  addToCart(movies: Movies) {
    console.log(`Adding to cart: ${movies.title}, ${movies.ticket_price}`);
    const theCartItem = new Cart(movies);
    this.cartService.addToCart(theCartItem);
    this.router.navigate(['/cart-details']);

  }
}