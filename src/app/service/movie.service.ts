import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tmdbConfig } from '../constants/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpService: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders()
      .append('accept', 'application/json')
      .append('Authorization', 'Bearer ' + tmdbConfig.accessToken);
  }

  getTopRated() {
    return this.httpService.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      { headers: this.getHeaders() }
    );
  }

  getTvShows() {
    return this.httpService.get('https://api.themoviedb.org/3/discover/tv', {
      headers: this.getHeaders(),
    });
  }

  getMovies() {
    return this.httpService.get('https://api.themoviedb.org/3/discover/movie', {
      headers: this.getHeaders(),
    });
  }

  getPopularMovies() {
    return this.httpService.get('https://api.themoviedb.org/3/movie/popular', {
      headers: this.getHeaders(),
    });
  }

  getNowPlayingMovies() {
    return this.httpService.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      { headers: this.getHeaders() }
    );
  }

  getTopRatedMovies() {
    return this.httpService.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      { headers: this.getHeaders() }
    );
  }

  getUpcomingMovies() {
    return this.httpService.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers: this.getHeaders(),
    });
  }

  getMovieVideos(movieId: number) {
    return this.httpService.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      { headers: this.getHeaders() }
    );
  }

  getBannerDetail(id: number) {
    return this.httpService.get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: this.getHeaders(),
    });
  }

  getBannerVideo(id: number) {
    return this.httpService.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      { headers: this.getHeaders() }
    );
  }
}
