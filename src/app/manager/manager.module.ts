import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ManagerLoginModule } from './manager-login/manager-login.module';
import { ManagerFormModule } from './manager-form/manager-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ManagerLoginModule,
    ManagerFormModule,
    MatButtonModule
  ]
})
export class ManagerModule { }
