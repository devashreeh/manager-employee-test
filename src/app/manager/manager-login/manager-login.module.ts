import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ManagerLoginComponent } from './manager-login.component';
import { ManagerLoginRoutingModule } from './manager-login-routing.module';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ManagerLoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ManagerLoginRoutingModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ManagerLoginModule { }
