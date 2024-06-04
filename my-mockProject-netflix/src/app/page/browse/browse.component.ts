import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../componenets/header/header.component';
import { MovieCategoryComponent } from '../../componenets/movie-category/movie-category.component';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browser',
  standalone: true,
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  imports: [HeaderComponent, MovieCategoryComponent],
})
export class BrowserComponent {
  movieService = inject(MovieService);
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcommingMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  bannerMovie!: Movie;
  tmdbConfig = tmdbConfig;
  public domSanitise=inject(DomSanitizer);

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[1];
       this.movieService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          this.bannerMovie.videoKey = res.results.find(
            (x: any) => (x.site = 'YouTube')
          ).key;
        });
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovies = result.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovies = result.results;
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      this.upcommingMovies = result.results;
    });
  }
}
