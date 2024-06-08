import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '531121168764-fj0qmf042utb4q601id0dt2ojmdpe6ej.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp),
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 250,
    });
  }

  private decodeToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }

  handleLogin(response: any) {
    if (response) {
      const payLoad = this.decodeToken(response.credential);
      sessionStorage.setItem('loggedInUser', JSON.stringify(payLoad));
      this.ngZone.run(() => {
        this.router.navigate(['browse']);
      });
    }
  }
}
