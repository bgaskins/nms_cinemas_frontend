import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movies } from '../../classes/movies';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

    constructor(private router: Router, private movieService: MovieServiceService) { }

    movies: Movies[];
  

    ngOnInit(): void {
      this.getAllMovies();
      }
    
    getAllMovies() {
      this.movieService.getAllMovies().subscribe((data: Movies[])=>{
        this.movies = data;
      })
    }

    getAMovieById(id:number){
      this.router.navigate(['confirmation/' + 'find', id]);
  }

  goToPayment(){
    this.router.navigate(['/payment/']);

  }

}
