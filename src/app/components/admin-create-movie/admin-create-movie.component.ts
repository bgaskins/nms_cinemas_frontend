import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-create-movie',
  templateUrl: './admin-create-movie.component.html',
  styleUrls: ['./admin-create-movie.component.css']
})
export class AdminCreateMovieComponent implements OnInit {

  form: FormGroup;


  constructor(public movieService: MovieServiceService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      ticket_price: new FormControl('', Validators.required),
      language: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      showtime: new FormControl('', [Validators.required]),
      auditorium: new FormControl('', Validators.required),
      image_url: new FormControl('', Validators.required)

    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.movieService.createMovie(this.form.value).subscribe(res => {
      console.log('Movie added successfully!');
      this.router.navigateByUrl('admin-dashboard');
    })
  }
}
