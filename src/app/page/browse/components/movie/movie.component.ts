import { Component, Input, OnInit } from '@angular/core';
import { IVideoContent } from '../../../../models/video-content.interface';
import { MatCardModule } from '@angular/material/card';
import { ImagePipe } from '../../pipes/image.pipe';
import { DescriptionPipe } from '../../pipes/description.pipe';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DescriptionPipe, ImagePipe, MatCardModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie: IVideoContent | undefined = undefined;
}
