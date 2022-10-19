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
  public form: FormGroup;

  constructor(public movieService: MovieServiceService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMoviesById(this.id).subscribe((data: Movies)=>{
      this.movie = data;
    });

    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      ticket_price: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      showtime: new FormControl('', [Validators.required]),
      auditorium: new FormControl('', [Validators.required])
    });
  }



  onSubmit(){
    let response = this.id ? this.movieService.updateMovie(this.id, this.form.value) : this.movieService.createMovie(this.form.value);
         
        response.subscribe(
        data => {
            console.log('Product created / updated successfully!');
            this.router.navigateByUrl('admin-dashboard');
        });
    }
  }





