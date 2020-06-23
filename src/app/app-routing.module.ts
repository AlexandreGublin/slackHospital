import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from './guard/login.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./page/home/home.module').then(mod => mod.HomeModule), canActivate: [LoginGuard] },
  { path: 'login', loadChildren: () => import('./page/login/login.module').then(mod => mod.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
