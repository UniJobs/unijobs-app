import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {AlertService} from '../login-alert/login.alert.service';
import {log} from 'util';
import {User} from '../../models/user.model';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: module.id
})

export class RegisterComponent implements OnInit {
  model: User = new User();
  loading = false;

  constructor(private router: Router,
  private userService: UserService,
  private alertService: AlertService) { }

  register(password, repassword) {
     // this.model.email = email;
     // this.model.username = username;
    this.model.password = password;
    log(this.model.email);
    console.log('register', this.model);
    if (password === repassword && password !== ' ') {
      this.loading = true;
      this.userService.create(this.model)
        .subscribe(
          data => {
              console.log(data);
               this.userService.saveData(data, this.model.password);
              this.alertService.success('Registration successful', true);
              setTimeout(() => this.router.navigateByUrl('/auth/register-details'), 1200);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

    }
    else {
      this.alertService.error('Password does not match!');
    }
  }

  ngOnInit() {
  }



}
