import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Movies } from '../../classes/movies';



@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private movieService: MovieServiceService,
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
}
