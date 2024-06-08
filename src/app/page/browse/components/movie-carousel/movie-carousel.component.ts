import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { IVideoContent } from '../../../../models/video-content.interface';
import { ImagePipe } from '../../pipes/image.pipe';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
  standalone: true,
  imports: [DescriptionPipe, ImagePipe, MatCardModule, MovieComponent],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MovieCarouselComponent implements OnInit, AfterViewInit {
  @Input() videoContents: IVideoContent[] = [];
  @Input() title!: string;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  selectedContent: string | null = null;

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnInit() {}

  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }

  setHoverMovie(movie: IVideoContent) {
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie() {
    this.selectedContent = null;
  }
}
