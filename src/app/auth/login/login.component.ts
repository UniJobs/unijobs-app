import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {AlertService} from "../login-alert/login.alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;

  constructor(public router: Router , private loginService: LoginService, private alertService: AlertService) {
    if (localStorage.getItem('token') !== null) {
      if (localStorage.getItem('role') !== null && localStorage.getItem('role') === '[ROLE_teacher]'){
        router.navigateByUrl('/user'); }
      else {
        router.navigateByUrl('/user'); }
    }
  }

  login(event, username, password) {
    this.loading = true;
    event.preventDefault();
    this.loginService.login(username, password)
      .subscribe(
        response => {
          this.loginService.checkToken(response.access_token)
            .subscribe(
              newresponse => {
                if (newresponse.response === '[ROLE_teacher]') {
                  localStorage.setItem('role', newresponse.response);
                  localStorage.setItem('token', response.access_token);
                  this.loginService.getByUsername(username)
                    .subscribe(t => {
                      localStorage.setItem('id', t.id.toString());
                      setTimeout(() => this.router.navigateByUrl('/user'), 1200);
                      setTimeout(() => this.alertService.success('Login successful.'), 500);
                    }, err => {
                      this.alertService.error('Error loading ID for this teacher account.')
                      this.loading = false;
                    });
                }
                else {
                  localStorage.setItem('role', newresponse.response);
                  localStorage.setItem('token', response.access_token);
                  this.loginService.getByUsername(username)
                    .subscribe(s => {
                      localStorage.setItem('id', s.id.toString());
                      setTimeout(() => this.router.navigateByUrl('/user'), 1200);
                      setTimeout(() => this.alertService.success('Login successful.'), 500);
                    }, err => {
                      this.alertService.error('Error loading ID for this student account.')
                      this.loading = false;
                    });
                }
              },
              error => {
                setTimeout(() => this.loading = false, 1000);
                setTimeout(() => this.alertService.error('Invalid login attempt.'), 1000);
              }
            );
        },
        error => {
          setTimeout(() => this.loading = false, 1000);
          setTimeout(() => this.alertService.error('Invalid credentials. Please check your username or password.'), 1000);
        }
      );
  }

}
