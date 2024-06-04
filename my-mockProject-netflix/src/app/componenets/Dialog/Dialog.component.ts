import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Movie } from '../../types/movies';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-Dialog',
  templateUrl: './Dialog.component.html',
  styleUrls: ['./Dialog.component.css'],
})
export class DialogComponent {

  public domSanitise=inject(DomSanitizer);

  constructor(public dialogRef: DialogRef, @Inject(DIALOG_DATA) public data: {movie: Movie}) {
    console.log(data);
  }
}
