import { Component, OnInit, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../componenets/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logoUrl = LOGO_URL;
  bgUrl = BG_IMG_URL;
  email!: string;
  password!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      this.router.navigateByUrl('/browse');
    }
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.toasterService.error('provide email or password');
      return;
    }

    this.loginService.login(this.email, this.password);
    this.toasterService.success('logged in sucessfully.');
    this.router.navigateByUrl('/browse');
  }
}
