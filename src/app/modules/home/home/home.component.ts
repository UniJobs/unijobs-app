import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";
import {User} from "../../../models/user.model";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(public router: Router, private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    })
  }

}
