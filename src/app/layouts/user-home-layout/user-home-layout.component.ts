import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {UserService} from '../../service/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-home-layout',
  templateUrl: './user-home-layout.component.html',
  styleUrls: ['./user-home-layout.component.css']
})
export class UserHomeLayoutComponent implements OnInit {
  user: User = new User;

  constructor(public router: Router, private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(s => {
      this.user = s;
      console.log(s || 'shit in getStudent - service');
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
