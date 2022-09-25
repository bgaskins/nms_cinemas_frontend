import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public movieTickets: any;

  constructor(private movieService: MovieServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getMovies().subscribe(any => {
      this.movieTickets = any;
    });
  }

  updateMovie() {
    this.router.navigate(['/admin-update-movie']);
  }

  deleteMovie() {
    this.router.navigate(['/admin-delete-movie']);
  }

  createMovie() {
    this.router.navigate(['/admin-add-movie']);
  }

}
