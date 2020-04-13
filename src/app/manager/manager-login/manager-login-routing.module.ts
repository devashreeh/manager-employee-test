import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManagerLoginComponent} from './manager-login.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerLoginRoutingModule {
}
