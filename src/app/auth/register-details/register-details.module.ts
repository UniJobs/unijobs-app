import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MyAlertModule} from "../../alert/alert.module";
import {RegisterDetailsComponent} from "./register-details.component";

const routes: Routes = [
  {
    path: '',
    component: RegisterDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MyAlertModule
  ],
  declarations: [RegisterDetailsComponent]
})
export class RegisterDetailsModule { }
