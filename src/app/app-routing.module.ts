import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'manager/manager-login', 
    pathMatch: 'full'
  },
  {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule' 
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule' 
  },
  {
    path: 'employee',
    loadChildren: './employee/employee.module#EmployeeModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
