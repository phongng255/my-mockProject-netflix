import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tmdbConfig } from '../../constants/config';
import { Movie } from '../../types/movies';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie! :Movie;
  tmdbConfig= tmdbConfig;
}
