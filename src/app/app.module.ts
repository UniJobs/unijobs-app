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
import { RegisterDetailsComponent } from './auth/register-details/register-details.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    PresentationLayoutComponent,
    UserLayoutComponent
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
