import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {routes} from './login.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const list = [
  LoginComponent
];

@NgModule({
  declarations: [...list],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})

export class LoginModule { }
