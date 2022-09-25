import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-admin-update-movie',
  templateUrl: './admin-update-movie.component.html',
  styleUrls: ['./admin-update-movie.component.css']
})
export class AdminUpdateMovieComponent implements OnInit {

  public updateMovieTicketDetails: FormGroup;

  constructor(private formBuilder: FormBuilder, private movieService: MovieServiceService, private router: Router) {
    this.updateMovieTicketDetails = this.formBuilder.group({
      movieTicketId: [],
      movieName: [''],
      showDate: [''],
      showTime: [''],
      showingLocation: [''],
      price: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(movieTicketDetails: FormGroup) {
    this.movieService.updateMovie(this.updateMovieTicketDetails.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-dashboard']);
  }
}
