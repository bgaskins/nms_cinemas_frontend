import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movies } from '../../classes/movies';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  title: string;
  movies: Movies[] = [];
  isSearched = false;

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {

  }

  searchMovies() {
    if (!this.title) {
      return;
    }

    this.movieService.searchByTitle(this.title).subscribe(
      (data: Movies[]) => {
        this.movies = data;
        this.isSearched = true;
      },
    );
  }
}