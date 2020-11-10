import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../components/config/config.module';
import { tokenExpired } from '../services/userdetails.service';
@Injectable()
export class AuthService {
  loggedIn = false;
  parameter = {};
  token: any;
  constructor(private router: Router, private httpClient: HttpClient, private config: ConfigModule) {
    if (tokenExpired()) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  logIn(login: string, password: string) {

    this.parameter = { u: login, p: password };
    // tslint:disable-next-line: arrow-return-shorthand
    this.httpClient.post(this.config.BaseURL + 'elogin', this.parameter).subscribe(
      data => {
        this.token = data;
        if (!this.token.data) {
          this.loggedIn = false;
          this.router.navigate(['/login-form']);
        } else {
          this.loggedIn = true;
          sessionStorage.setItem('Token', this.token.data.token);
          this.router.navigate(['/']);
          window.location.reload();
        }
      },
      error => {
        console.log('Error', error);
      });
  }

  logOut() {
    this.loggedIn = false;
    sessionStorage.clear();
    this.router.navigate(['/login-form']);
  }

  get isLoggedIn() {
    return this.loggedIn;
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn;
    const isLoginForm = route.routeConfig.path === 'login-form';

    if (isLoggedIn && isLoginForm) {
      this.router.navigate(['/']);
      return false;
    }

    if (!isLoggedIn && !isLoginForm) {
      this.router.navigate(['/login-form']);
    }

    return isLoggedIn || isLoginForm;
  }
}
