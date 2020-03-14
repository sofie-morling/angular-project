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

movieResults: any[];
peopleResults: any[];

constructor(private apiService: ApiService) { }

search(term: string): void {
  if(!term.trim()) return;
  console.log(term);
  this.apiService.searchMovies(term).subscribe((data)=>{
    console.log(data);
    this.movieResults = data['results'].filter(item => item.media_type === 'movie');
    this.peopleResults = data['results'].filter(item => item.media_type === 'person');
  });
}

  ngOnInit(): void {
  }
 /*listMovies() {
   this.results = this.apiService.searchResults;
 }*/
}
