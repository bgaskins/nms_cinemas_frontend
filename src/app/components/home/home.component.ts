import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../../classes/movies';
import { MovieServiceService } from '../../services/movie-service.service';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movies[] = [];
  faFilm = faFilm;

  constructor(private router: Router, private movieService: MovieServiceService) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data: Movies[]) => {
      console.log(this.movies);
      this.movies = data;
    });
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
