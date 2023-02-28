import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  constructor(public movieService: MovieServiceService, private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMoviesById(this.id).subscribe((data: Movies) => {
      this.movie = data;
      this.form = this.formBuilder.group({
        id: [this.movie.id],
        title: [this.movie.title, Validators.required],
        ticket_price: [this.movie.ticket_price, Validators.required],
        language: [this.movie.language, Validators.required],
        description: [this.movie.description, Validators.required],
        showtime: [this.movie.showtime, Validators.required],
        auditorium: [this.movie.auditorium, Validators.required],
        image_url: [this.movie.image_url],
      });
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.movieService.updateMovie(this.id, this.form.value).subscribe(
      () => {
        console.log('Movie updated successfully!');
        this.router.navigateByUrl('admin-dashboard');
      },
      (error) => {
        console.log('Failed to update movie:', error);
      }
    );
  }
}