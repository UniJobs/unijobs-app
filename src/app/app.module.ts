import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./routing/app-routing.module";
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { PresentationLayoutComponent } from './layouts/presentation-layout/presentation-layout.component';
import {UserService} from "./service/user.service";
import {MyAlertModule} from "./alert/alert.module";
import {LoginService} from "./service/login.service";
import { UserHomeLayoutComponent } from './layouts/user-home-layout/user-home-layout.component';
import { RegisterDetailsComponent } from './auth/register-details/register-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    PresentationLayoutComponent,
    UserHomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MyAlertModule,
  ],
  providers: [UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
