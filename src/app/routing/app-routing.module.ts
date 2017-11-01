import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {NgModule} from "@angular/core";
import {FullLayoutComponent} from "../layouts/full-layout/full-layout.component";
import {PresentationLayoutComponent} from "../layouts/presentation-layout/presentation-layout.component";
import {UserHomeLayoutComponent} from "../layouts/user-home-layout/user-home-layout.component";

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
    path: 'user',
    component: UserHomeLayoutComponent
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
      },
      {
        path: 'register-details',
        loadChildren: './../auth/register-details/register-details.module#RegisterDetailsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
