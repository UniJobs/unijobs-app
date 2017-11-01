import { Component, OnInit } from '@angular/core';
import {AlertService} from "../login-alert/login.alert.service";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {register} from "ts-node/dist";
import {log} from "util";
import {User} from "../../models/user.model";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {
  model: User = new User;
  loading = false;

  constructor(private router: Router,
              private userService: UserService,
              private loginService: LoginService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.model = this.userService.getRegisteredUser();
    log('registercomp ' + this.model.id);
  }

  submit() {
    log(this.model.dob.toString());
    this.loading = true;
    this.userService.updateUser(this.model)
      .subscribe(
        data => {
          log(data.id.toString());
          this.userService.saveData(data);
          this.alertService.success('Registration successful', true);
          log('register-details ' + this.model.username);
          log('register-details ' + this.model.password);
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
                            setTimeout(() => this.router.navigateByUrl('/user/home'), 1200);
                          },
                        );
                    },
                  );
              },
              error => {
                setTimeout(() => this.loading = false, 1000);
                setTimeout(() => this.alertService.error('what.......'), 1000);
              },
            );
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }
}
