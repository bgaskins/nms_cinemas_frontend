import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/classes/movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{


  movies: Movies[] = [];

  constructor(private movieService: MovieServiceService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data: Movies[])=>{
      console.log(this.movies);
      this.movies = data;
    });

  } 

  deleteMovie(id:number) {
    this.movieService.deleteMovieById(id).subscribe(() => this.ngOnInit());
      console.log('Movie deleted', id);

    }
  }


