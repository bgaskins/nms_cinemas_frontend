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

  ngOnInit() {

    this.movieService.getAllMovies().subscribe((data: Movies[])=>{
      console.log(this.movies);
      this.movies = data;
    });

  } 

  refresh(): void {
    window.location.reload();
}

  deleteMovie(id:number) {
    this.movieService.deleteMovieById(id)
    .subscribe(
      data =>
        console.log(data)
    );
    this.router.navigate(['admin-dashboard'])
    .then(() => {
      window.location.reload();
    });
      }
  }


