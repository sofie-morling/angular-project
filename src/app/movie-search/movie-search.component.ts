import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Movie } from '../movie';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

movies$: Observable<Movie[]>;  

private searchTerms = new Subject<string>();
  
constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.movies$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.apiService.searchMovies(term)),
      );
  }
 /*listMovies() {
   this.results = this.apiService.searchResults;
 }*/
}
