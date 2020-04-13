import { AuthGuard } from './../../app.authguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRoutingModule { }
