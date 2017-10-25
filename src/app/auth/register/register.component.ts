import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AlertService} from "../login-alert/login.alert.service";
import {log} from "util";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: module.id
})

export class RegisterComponent implements OnInit {
  model: User;
  /*loading = false;*/

  constructor(private router: Router,
  private userService: UserService,
  private alertService: AlertService) { }

  register() {
    /*this.loading = true;*/
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/auth/login']);
        },
        error => {
          this.alertService.error(error);
          /*this.loading = false;*/
        });
  }

  ngOnInit() {
  }

}
