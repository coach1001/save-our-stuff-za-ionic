import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-verified',
  templateUrl: './not-verified.page.html',
  styleUrls: ['./not-verified.page.scss'],
})
export class NotVerifiedPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logoutUser().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  resendVerification(): void {
    this.authService.resendVerification().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
