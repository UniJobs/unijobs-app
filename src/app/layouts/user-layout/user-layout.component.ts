import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {UserService} from "../../service/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  user: User;

  constructor(public router: Router, private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    })
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
