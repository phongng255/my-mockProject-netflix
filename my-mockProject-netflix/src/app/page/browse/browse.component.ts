import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../componenets/header/header.component';

@Component({
  selector: 'app-browser',
  standalone: true,
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  imports: [HeaderComponent],
})
export class BrowserComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
