import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeFormRoutingModule } from './employee-form-routing.module';
import { EmployeeFormComponent } from './employee-form.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeeFormRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class EmployeeFormModule { }
