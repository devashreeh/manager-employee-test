import { AuthGuard } from './../../app.authguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-form.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: EmployeeFormComponent
  },
  {
    path: 'employee-form/:id',
    canActivate: [AuthGuard],
    component: EmployeeFormComponent 
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeFormRoutingModule { }
