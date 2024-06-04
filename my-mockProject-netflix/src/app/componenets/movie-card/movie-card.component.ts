import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tmdbConfig } from '../../constants/config';
import { Movie } from '../../types/movies';
import { MatCardModule } from '@angular/material/card';
import {Dialog} from '@angular/cdk/dialog';
import { DialogComponent } from '../Dialog/Dialog.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  constructor(private dialog: Dialog) {}
  
  openDialog(movie: Movie) {
    this.dialog.open(DialogComponent, {
      data: {movie: movie},
    });
  }

  @Input() movie!: Movie;
  tmdbConfig = tmdbConfig;
  showTitle: boolean = false;
}
