import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from '../../section/login-form/login-form.component';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutGuard } from './login-layout.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginLayoutGuard],
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginLayoutRoutingModule {
}
