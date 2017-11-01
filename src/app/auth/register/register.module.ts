import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AlertModule} from "ng2-bootstrap";
import {MyAlertModule} from "../../alert/alert.module";

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MyAlertModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
