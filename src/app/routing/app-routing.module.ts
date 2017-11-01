import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {NgModule} from "@angular/core";
import {FullLayoutComponent} from "../layouts/full-layout/full-layout.component";
import {PresentationLayoutComponent} from "../layouts/presentation-layout/presentation-layout.component";
import {UserLayoutComponent} from "../layouts/user-layout/user-layout.component";

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
    component: UserLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './../modules/home/home.module#HomeModule'
      }
    ]
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
