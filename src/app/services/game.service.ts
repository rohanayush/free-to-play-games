import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = env.url;
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': env.key,
    'X-RapidAPI-Host': env.host,
  });
  constructor(private http: HttpClient) {}

  getHomeContent() {
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
