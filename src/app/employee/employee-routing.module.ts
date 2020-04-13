import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee-list',
    loadChildren: './employee-list/employee-list.module#EmployeeListModule'
  },
  {
    path: 'employee-form',
    loadChildren: './employee-form/employee-form.module#EmployeeFormModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
