import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.apiService.getMovie(id).subscribe((response: any) => {
      this.movie = response;
      this.apiService.getCredits(id).subscribe((response: any) => {
        console.log('credits', response);
        this.movie.cast = response.cast;
        this.movie.crew = response.crew;
        console.log('cast', this.movie.cast);
      });
    });
  }
}
