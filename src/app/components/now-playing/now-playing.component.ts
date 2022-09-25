import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';



@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private movieService: MovieServiceService,
  ) { };

  public id: any;
  public title: any;
  public time: any;
  public showing: any;

  public searchMovie: any = '';
  public query: any = '';

  movies = [
    { id: 1, title: 'The Ruins', time: 8 },
    { id: 3, title: 'Scream', time: 5, showing: 'matinee' },
    { id: 4, title: 'Wrong Turn', time: 3, showing: 'matinee' },
    { id: 5, title: 'The Grudge', time: 6, showing: 'matinee' },
    { id: 6, title: 'Halloween', time: 9 },
  ];

  ngOnInit() {
  }
}
