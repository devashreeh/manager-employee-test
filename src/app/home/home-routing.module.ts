import { AuthGuard } from './../app.authguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home.component';

const routes: Routes = [
  {
    path:'',
    canActivate : [AuthGuard],
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
