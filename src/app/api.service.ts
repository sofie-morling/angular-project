import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'd77b617db369bdf6ca8a09da90ef5676';
  API_URL = 'https://api.themoviedb.org/3/';
  apiKeyParam = `api_key=${this.API_KEY}`;
  public searchResults: Movie[] = [];
  log: any;

  public getMovies() {
    return this.httpClient.get(`${this.API_URL}discover/movie?${this.apiKeyParam}&sort_by=popularity.desc`);
  }

  public getMovie(id: number) {
    return this.httpClient.get(`${this.API_URL}movie/${id}?${this.apiKeyParam}`);
  }

  public getCredits(id: number) {
    return this.httpClient.get(`${this.API_URL}movie/${id}/credits?${this.apiKeyParam}`);
  }
  // search function for movies

  searchMovies(term: string) {
   if (!term.trim()) {
     return;
   }
   return this.httpClient.get(`${this.API_URL}search/multi?${this.apiKeyParam}&query=${term}`);
  
  }
  handleError<T>(arg0: string, arg1: undefined[]): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient) { }
}
