import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movies } from '../../classes/movies';

@Component({
  selector: 'app-admin-update-movie',
  templateUrl: './admin-update-movie.component.html',
  styleUrls: ['./admin-update-movie.component.css']
})
export class AdminUpdateMovieComponent implements OnInit {

  id: number;
  movie: Movies;
  form: FormGroup;

  constructor(public movieService: MovieServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['movieId'];
    this.movieService.getMoviesById(this.id).subscribe((data: Movies)=>{
      this.movie = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      ticket_price: new FormControl('', Validators.required),
      language: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      showtime: new FormControl('', [Validators.required]),
      auditorium: new FormControl('', Validators.required)
    });
  }

  submit(){
    console.log(this.form.value);
    this.movieService.createMovie(this.form.value).subscribe(res => {
         console.log('Movie update successful!');
         this.router.navigateByUrl('admin-dashboard');
    })
  }
}



