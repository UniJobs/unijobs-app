import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {AlertService} from '../login-alert/login.alert.service';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  model: User = new User;

  constructor(public router: Router , private loginService: LoginService, private alertService: AlertService) {
    if (localStorage.getItem('token') !== null) {
      if (localStorage.getItem('role') !== null && localStorage.getItem('role') === '[ROLE_teacher]'){
        router.navigateByUrl('/user'); }
      else {
        router.navigateByUrl('/user'); }
    }
  }

  login(event) {
    this.loading = true;
    event.preventDefault();
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
        response => {
          localStorage.setItem('token', response.access_token);
          this.loginService.checkToken(response.access_token)
            .subscribe(
              newresponse => {
                this.loginService.getByUsername(this.model.username)
                  .subscribe(user => {
                      localStorage.setItem('userId', user.id.toString());
                      setTimeout(() => this.router.navigateByUrl('/user'), 1200);

                    },
                  );
              },);
        },
        error => {
          setTimeout(() => this.loading = false, 1000);
          setTimeout(() => this.alertService.error('Invalid credentials. Please check your username or password.'), 1000);
        }
      );
  }

}
