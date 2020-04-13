import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'manager-login',
    loadChildren: './manager-login/manager-login.module#ManagerLoginModule'
  },
  {
    path: 'manager-form',
    loadChildren: './manager-form/manager-form.module#ManagerFormModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule { }
