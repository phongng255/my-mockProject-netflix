import { Component, inject } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { HeaderComponent } from '../../componenets/header/header.component';
import { BannerComponent } from '../../componenets/banner/banner.component';
import { AuthService } from '../../service/auth.service';
import { MovieService } from '../../service/movie.service';
import { IVideoContent } from '../../models/video-content.interface';
import { CommonModule } from '@angular/common';
import { MovieCarouselComponent } from './components/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-browser',
  standalone: true,
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  imports: [HeaderComponent, BannerComponent, CommonModule, MovieCarouselComponent],
})
export class BrowserComponent {
  
  constructor(private auth: AuthService, private movieService: MovieService) {}
  
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  bannerDetail$: Observable<any> | undefined;
  bannerVideo$: Observable<any> | undefined;

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  sources: Observable<any>[] = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getTopRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
  ];

  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(
          ([
            movies,
            tvShows,
            ratedMovies,
            nowPlaying,
            upcoming,
            popular,
            topRated,
          ]) => {
            const randomNumber =
              Math.floor(Math.random() * movies.results.length) + 1;
            this.bannerDetail$ = this.movieService.getBannerDetail(
              movies.results[randomNumber].id
            );
            this.bannerVideo$ = this.movieService.getBannerVideo(
              movies.results[randomNumber].id
            );
            return {
              movies,
              tvShows,
              ratedMovies,
              nowPlaying,
              upcoming,
              popular,
              topRated,
            };
          }
        )
      )
      .subscribe((res: any) => {
        this.movies = res.movies.results;
        this.tvShows = res.tvShows.results;
        this.ratedMovies = res.ratedMovies.results;
        this.nowPlayingMovies = res.nowPlaying.results;
        this.upcomingMovies = res.upcoming.results;
        this.popularMovies = res.popular.results;
        this.topRatedMovies = res.topRated.results;
        this.getMovieKey();
      });
  }

  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id).subscribe((res) => {});
  }

  singOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
