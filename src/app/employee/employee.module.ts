import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { EmployeeFormModule } from './employee-form/employee-form.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EmployeeListModule,
    EmployeeFormModule,
    MatDialogModule
  ]
})
export class EmployeeModule { }
