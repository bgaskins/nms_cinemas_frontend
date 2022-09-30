import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/classes/movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{


  movies: Movies[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data: Movies[])=>{
      this.movies = data;
      console.log(this.movies);
    })  
  } 

    deleteMovie(id:number){
      this.movieService.deleteAMovie(id).subscribe(_res => {
           this.movies = this.movies.filter(item => item.id !== id);
           console.log('Movie deleted successfully!');
      })
    }

    }
