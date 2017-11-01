import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from "../auth/login-alert/login.alert.component";
import {AlertService} from "../auth/login-alert/login.alert.service";
import {AlertModule} from "ng2-bootstrap"

@NgModule({
  imports: [
    CommonModule,
    AlertModule
  ],
  declarations: [
    AlertComponent
  ],
  providers: [
    AlertService
  ],
  exports: [
    AlertComponent
  ]
})
export class MyAlertModule { }
