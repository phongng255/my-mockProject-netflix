import { Component, Input, inject } from '@angular/core';

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(protected auth: AuthService) {}

  @Input({ required: true }) userImg: string = '';

  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;

  navList = [
    'Home',
    'TV Shows',
    'News & Popular',
    'My List',
    'Browse by Language',
  ];
}
