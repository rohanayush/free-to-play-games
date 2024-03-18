import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';

interface Environment {
  key: string;
  host: string;
  url: string;
}

export const environment: Environment ={
  key:'b64d452b40mshc4e0459148c0016p11b5eajsn727b13eeebd2',
  host:'free-to-play-games-database.p.rapidapi.com',
  url:'https://free-to-play-games-database.p.rapidapi.com/api/games'
};




@Injectable({
  providedIn: 'root',
})
export class GameService {
  
  private apiUrl = environment.url;
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.key,
    'X-RapidAPI-Host': environment.host,
  });
  constructor(private http: HttpClient) {}

  getHomeContent() {
    console.log("Reaching here");
    
    return this.http.get(this.apiUrl, {
      headers: this.headers,
      responseType: 'text',
    });
  }

  getByGenreTag(query: string) {
    const url = this.apiUrl + `?&category=${query}&tag=${query}`;
    return this.http.get(url, {
      headers: this.headers,
      responseType: 'text',
    });
  }

  getComputerGames() {
    const url = this.apiUrl + `?&platform=pc`;
    return this.http.get(url, {
      headers: this.headers,
      responseType: 'text',
    });
  }

  getBrowserGames() {
    const url = this.apiUrl + `?&platform=browser`;
    return this.http.get(url, {
      headers: this.headers,
      responseType: 'text',
    });
  }
}
