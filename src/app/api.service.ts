import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_KEY = 'd77b617db369bdf6ca8a09da90ef5676';

public getMovies(){
  return this.httpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=d77b617db369bdf6ca8a09da90ef5676&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
}
  constructor(private httpClient: HttpClient) { }
}
