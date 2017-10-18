import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {NgModule} from "@angular/core";
import {FullLayoutComponent} from "../layouts/full-layout/full-layout.component";
import {PresentationLayoutComponent} from "../layouts/presentation-layout/presentation-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PresentationLayoutComponent
  },
  {
    path: 'auth',
    component: FullLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './../auth/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './../auth/register/register.module#RegisterModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
