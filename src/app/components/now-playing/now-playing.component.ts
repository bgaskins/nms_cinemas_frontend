import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Movies } from '../../classes/movies';
import { Router } from '@angular/router';



@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  constructor(private router: Router, private movieService: MovieServiceService,
  ) { };

  movies: Movies[] = [];

  public searchMovie: any = '';
  public query: Movies[];



  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data: Movies[])=>{
      this.movies = data;
      console.log(this.movies);
    })  
  }
  getMovieById(id: number){
    this.router.navigate(['/find/', id]);
  }
 
  goToConfirmation(){
    this.router.navigate(['/confirmation']);
  }
}