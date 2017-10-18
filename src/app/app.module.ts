import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./routing/app-routing.module";
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { PresentationLayoutComponent } from './layouts/presentation-layout/presentation-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    PresentationLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
