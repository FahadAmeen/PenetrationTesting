import { Login } from '../../components/login/login.component';
import { Movie } from '../../components/create/create.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://localhost:44347/api';

  queryUrl = '?search=';
  count;
  // data;
  // ?page=3&limit=8&sort=Id
  constructor(private http: HttpClient) { }


  getAuthorization(login: Login) {
    return this.http.post(this.baseUrl + '/logins' + '/auth', login, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getAllPages() {
    return this.http.get(this.baseUrl + '/permissions' + '/getallpages');
  }
  getMovies(page: number = 1, limit: number = this.count, sort: string = 'Id') {
    return this.http.get(
      this.baseUrl + '/Movies' + '?page=' + page + '&limit=' + limit + '&sort=' + sort
    );
  }
  postMovie(movie: Movie) {
    return this.http.post<Movie>(this.baseUrl + '/Movies', movie, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getAllMovies() {
    return this.http.get(this.baseUrl + '/Movies' + '/allData');
  }

  deleteMovie(id: number) {
    return this.http.delete<Movie>(this.baseUrl + '/Movies' + '/' + id);
  }
  downloadPoster(id: number) {
    return this.http.get(this.baseUrl + '/Movies/download/' + id);
  }
}
