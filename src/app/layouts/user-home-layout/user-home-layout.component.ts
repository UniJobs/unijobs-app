import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-home-layout',
  templateUrl: './user-home-layout.component.html',
  styleUrls: ['./user-home-layout.component.css']
})
export class UserHomeLayoutComponent implements OnInit {

  constructor(public router: Router, private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
