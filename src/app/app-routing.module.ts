import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/main/main.module#MainModule',
    canActivateChild: [ AuthGuard ]
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './modules/register/register.module#RegisterModule'
  },
  {
    path: '**',
    loadChildren: './modules/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
